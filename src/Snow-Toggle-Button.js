import { useEffect, useRef } from 'preact/hooks'
import './Button.css'
import SnowIcon from '../assets/snowflake.png'

export default function SnowToggleButton (props) {
  const { toggleSnow } = props
  const button = useRef(null)
  const snowflake = useRef(null)
  useEffect(() => {
    button.current.addEventListener('click', (e) => {
      snowflake.current.classList.toggle('spinning')
      snowflake.current.classList.toggle('snowflake-disabled')
      button.current.classList.toggle('button-disabled')
      toggleSnow()
    })
  }, [])
  return (
    <div className={'button snow-toggle-button'} role="button" ref={button}>
      <div className={'button-container'}>
        <img src={SnowIcon} ref={snowflake} className={'invert spinning'} width={30} height={30} />
      </div>
    </div>
  )
}
