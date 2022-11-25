import './Front-Matter.css'

import Wave from './Wave'
import Calendar from './Calendar'

export default function FrontMatter (props) {
  const {
    isWaveEnabled = true
  } = props
  const height = Math.max(window.innerHeight, 850)
  return (
    <>
      <Wave color={'#593e1f'} height={-100} priority={1} disabled={!isWaveEnabled}/>
      <Wave color={'#8f5304'} height={-100 + height / 4 * 1.15} priority={2} disabled={!isWaveEnabled}/>
      <Wave color={'#c17100'} height={-100 + height / 4 * 2.2} priority={3} disabled={!isWaveEnabled}/>
      <Wave color={'#8f5004'} height={-100 + height / 4 * 3} priority={4} disabled={!isWaveEnabled}/>
      <Wave color={'#463318'} height={-100 + height / 4 * 4} priority={5} disabled={!isWaveEnabled}/>
      <div className={'front-page'} style={{ height, background: isWaveEnabled ? '' : '#463318' }}>
        <a
          className={'front-page-go-back-link'}
          href={'https://ejlx-discord.github.io/Advent-Calendar-Hub/'}
        >
          <span style={{
            position: 'relative',
            bottom: '1px',
            marginRight: '5px'
          }}>
            {'<'}
          </span>
          See Other Years
        </a>
        <h1 className={'front-page-title'} style={{ top: height / 6 }}>
          EJLX Advent Calendar 2021
        </h1>
        <div className={'front-page-calendar'}>
          <Calendar />
        </div>
      </div>
    </>
  )
}
