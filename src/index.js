import './index.css'
import Entry from './Entry'
import FrontMatter from './Front-Matter'
import BackToTopButton from './Back-To-Top-Button'
import SnowToggleButton from './Snow-Toggle-Button'

import 'particles.js'
import particleOptions from './particles.json'
import particleBackOptions from './particles-back.json'
import anime from 'animejs'
import { useState, useEffect, useRef } from 'preact/hooks'

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

export default function App () {
  const entries = getEntries([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ])

  useEffect(() => {
    particlesJS('particles', particleOptions)
    particlesJS('particles-back', particleBackOptions)
  }, [])

  const snowLayer1 = useRef(null)
  const snowLayer2 = useRef(null)

  useEffect(() => {
    window.addEventListener('mousemove', handleParallax)
  }, [])

  const toggleSnow = () => {
    if (snowLayer1.current.classList.contains('hidden')) {
      snowLayer1.current.classList.remove('hidden')
      snowLayer2.current.classList.remove('hidden')
      pJSDom[0].pJS.fn.vendors.start()
      pJSDom[1].pJS.fn.vendors.start()
      window.addEventListener('mousemove', handleParallax)
    } else {
      cancelRequestAnimFrame(pJSDom[0].pJS.fn.checkAnimFrame)
      cancelRequestAnimFrame(pJSDom[0].pJS.fn.drawAnimFrame)
      cancelRequestAnimFrame(pJSDom[1].pJS.fn.checkAnimFrame)
      cancelRequestAnimFrame(pJSDom[1].pJS.fn.drawAnimFrame)
      pJSDom[0].pJS.fn.particlesEmpty()
      pJSDom[1].pJS.fn.particlesEmpty()
      pJSDom[0].pJS.fn.canvasClear()
      pJSDom[1].pJS.fn.canvasClear()
      window.removeEventListener('mousemove', handleParallax)
      snowLayer1.current.classList.add('hidden')
      snowLayer2.current.classList.add('hidden')
    }
  }

  return (
    <>
      <FrontMatter />
      <BackToTopButton />
      <SnowToggleButton toggleSnow={toggleSnow}/>
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
      <div id={'particles'} ref={snowLayer1}/>
      <div id={'particles-back'} ref={snowLayer2}/>
    </>
  )
}
