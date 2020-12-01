import { useEffect, useRef } from 'preact/hooks'
import './Back-To-Top-Button.css'

export default function BackToTopButton () {
  const button = useRef(null)
  useEffect(() => {
    button.current.addEventListener('click', (e) => {
      window.scroll(0, 0)
    })
  }, [])
  return (
    <div className={'back-to-top-button'} role="button" ref={button}>
      <div className={'back-to-top-button-arrow-container'}>
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polyline points="10 50 25 25 40 50 25 40 10 50" strokeLinecap="butt" fill="#ccccccaa" strokeLinejoin="miter"/>
        </svg>
      </div>
    </div>
  )
}
