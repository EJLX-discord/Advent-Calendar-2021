import { useEffect, useRef } from 'preact/hooks'
import './Button.css'

import upArrow from '../assets/up.png'

export default function BackToTopButton () {
  const button = useRef(null)
  useEffect(() => {
    button.current.addEventListener('click', (e) => {
      window.scroll(0, 0)
      window.history.pushState({}, '', './')
    })
  }, [])
  return (
    <div className={'button back-to-top-button'} role="button" ref={button}>
      <div className={'button-container'} style={{
        position: 'relative',
        bottom: 2
      }}>
        <img src={upArrow} className={'invert'} height={25} width={25} />
      </div>
    </div>
  )
}
