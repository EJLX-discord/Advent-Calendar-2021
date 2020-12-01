import './index.css'
import Entry from './Entry'
import FrontMatter from './Front-Matter'

import Particles from 'particlesjs'
import { useEffect } from 'preact/hooks'

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
  const entries = getEntries(['1', '2'])
  useEffect(() => {
    Particles.init({
      selector: '.particles',
      sizeVariations: 7,
      color: ['#abc4ff77', '#b6ccfe77', '#ccdbfd77', '#d7e3fc77', '#e2eafc77', '#edf2fb77'],
      maxParticles: 100,
      speed: 0.1,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 50
          }
        },
        {
          breakpoint: 425,
          options: {
            maxParticles: 10
          }
        }
      ]
    })
  }, [])
  return (
    <>
      <FrontMatter />
      <div className={'main-container'}>
        <div className={'entry-list'}>
          {entries.map((entry, idx) =>
            <Entry
              icon={entry.metadata.icon}
              username={entry.metadata.username}
              date={entry.metadata.date}
              entry={entry.node}
              key={idx}
            />
          )}
        </div>
      </div>
      <canvas className={'particles'}/>
    </>
  )
}
