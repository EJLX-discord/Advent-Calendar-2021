import './Button.css'
import SnowIcon from '../assets/snowflake.png'

export default function SnowToggleButton (props) {
  const { toggleSnow, isSnowEnabled } = props
  return (
    <div
      className={`button snow-toggle-button ${isSnowEnabled ? '' : 'button-disabled'}`}
      role="button"
      onClick={toggleSnow}
    >
      <div className={'button-container'}>
        <img
          src={SnowIcon}
          className={`invert ${isSnowEnabled ? 'spinning' : 'snowflake-disabled'}`}
          width={30}
          height={30}
        />
      </div>
    </div>
  )
}
