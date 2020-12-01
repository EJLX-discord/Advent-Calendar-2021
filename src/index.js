import './index.css'
import Entry from './Entry'
import FrontMatter from './Front-Matter'
import BackToTopButton from './Back-To-Top-Button'

import 'particles.js'
import particleOptions from './particles.json'
import particleBackOptions from './particles-back.json'
import anime from 'animejs'
import { useEffect } from 'preact/hooks'

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

export default function App () {
  const entries = getEntries([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 28])

  useEffect(() => {
    particlesJS('particles', particleOptions)
    particlesJS('particles-back', particleBackOptions)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY
      const xRatio = mouseX / window.innerWidth
      const yRatio = mouseY / window.innerHeight
      anime({
        targets: '#particles',
        duration: 500,
        easing: 'easeOutCubic',
        translateX: (xRatio - 0.5) * -15,
        translateY: (yRatio - 0.5) * -15
      })
      anime({
        targets: '#particles-back',
        duration: 500,
        easing: 'easeOutCubic',
        translateX: (xRatio - 0.5) * -40,
        translateY: (yRatio - 0.5) * -40
      })
    })
  }, [])

  return (
    <>
      <FrontMatter />
      <BackToTopButton />
      <div className={'main-container'}>
        <div className={'entry-list'}>
          {entries.map((entry, idx) =>
            <Entry
            icon={entry.metadata.icon}
            alias={entry.metadata.alias}
            username={entry.metadata.username}
            date={entry.metadata.date}
            entry={entry.node}
            key={idx}
            />
          )}
        </div>
      </div>
      <div id={'particles'}/>
      <div id={'particles-back'}/>
    </>
  )
}
