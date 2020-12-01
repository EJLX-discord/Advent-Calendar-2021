import './index.css'
import Entry from './Entry'
import FrontMatter from './Front-Matter'

import 'particles.js'
import particleOptions from './particles.json'
import particleBackOptions from './particles-back.json'
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
  const entries = getEntries([1, 2])

  useEffect(() => {
    particlesJS('particles', particleOptions)
    particlesJS('particles-back', particleBackOptions)
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
      <div id={'particles'}/>
      <div id={'particles-back'}/>
    </>
  )
}
