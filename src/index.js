import './index.css'
import Entry from './Entry'
import FrontMatter from './Front-Matter'
import BackToTopButton from './Back-To-Top-Button'
import SnowToggleButton from './Snow-Toggle-Button'

import { tsParticles } from 'tsparticles'
import anime from 'animejs'
import Cookies from 'universal-cookie'
import particleOptions from './particles.json'
import particleBackOptions from './particles-back.json'
import { useState, useEffect } from 'preact/hooks'

// Overwrites function used by particle.js that uses deprecated variables
Object.deepExtend = function deepExtendFunction (destination, source) {
  for (const property in source) {
    if (source[property] && source[property].constructor &&
      source[property].constructor === Object) {
      destination[property] = destination[property] || {}
      deepExtendFunction(destination[property], source[property])
    } else {
      destination[property] = source[property]
    }
  }
  return destination
}

// Debounce function taken from underscore.js
function debounce (func, wait, immediate) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

function getEntries (entryNames, entryDirectory = './data/entries') {
  const entries = entryNames.map(entryName => {
    const entry = {}
    const module = require(`${entryDirectory}/${entryName}.js`)
    entry.node = module.default
    entry.metadata = module.metadata
    return entry
  })
  return entries
}

const handleParallax = debounce((e) => {
  const mouseX = e.clientX
  const mouseY = e.clientY
  const xRatio = mouseX / window.innerWidth
  const yRatio = mouseY / window.innerHeight
  const normalizedX = (xRatio - 0.5) * 2
  const normalizedY = (yRatio - 0.5) * 2

  anime({
    targets: '#particles',
    duration: 500,
    easing: 'easeOutSine',
    translateX: normalizedX * -10,
    translateY: normalizedY * -10
  })
  anime({
    targets: '#particles-back',
    duration: 500,
    easing: 'easeOutSine',
    translateX: normalizedX * -20,
    translateY: normalizedY * -20
  })
}, 0)

const cookies = new Cookies()

export default function App () {
  const cookieVal = cookies.get('isSnowEnabled')
  const firstState = cookieVal === undefined ? true : cookieVal === 'true'
  const [isSnowEnabled, setIsSnowEnabled] = useState(firstState)
  const entries = getEntries([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
  ])

  useEffect(() => {
    tsParticles.load('particles', particleOptions)
    tsParticles.load('particles-back', particleBackOptions)
  }, [])

  useEffect(() => {
    if (isSnowEnabled) {
      tsParticles.domItem(0).play()
      tsParticles.domItem(1).play()
      window.addEventListener('mousemove', handleParallax)
    } else {
      tsParticles.domItem(0).pause()
      tsParticles.domItem(1).pause()
      window.removeEventListener('mousemove', handleParallax)
    }
  }, [isSnowEnabled])

  const toggleSnow = () => {
    cookies.set('isSnowEnabled', !isSnowEnabled, { maxAge: 2147483647, sameSite: 'strict' })
    setIsSnowEnabled(!isSnowEnabled)
  }

  return (
    <>
      <FrontMatter isWaveEnabled={isSnowEnabled}/>
      <BackToTopButton />
      <SnowToggleButton
        toggleSnow={toggleSnow}
        isSnowEnabled={isSnowEnabled}
      />
      <div className={'main-container'}>
        <div className={'entry-list'}>
          {entries.map((entry, idx) =>
            <Entry
              icon={entry.metadata.icon}
              alias={entry.metadata.alias}
              username={entry.metadata.username}
              id={entry.metadata.id}
              date={entry.metadata.date}
              entry={entry.node}
              entryIndex={entry.metadata.index}
              key={idx}
            />
          )}
        </div>
      </div>
      <div id={'particles'} className={isSnowEnabled ? '' : 'hidden'}/>
      <div id={'particles-back'} className={isSnowEnabled ? '' : 'hidden'}/>
    </>
  )
}
