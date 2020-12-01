import './Entry.css'

export default function Entry (props) {
  const {
    icon,
    username = 'Anonymous',
    date = 'Unknown Date',
    entry = 'Entry skipped'
  } = props
  return (
    <div className={'entry'}>
      <div className={'entry-titlebar'}>
        <div className={'entry-titlebar-info'}>
          <img className={'entry-titlebar-icon'} src={icon}/>
          <div className={'entry-titlebar-text-container'}>
            <div className={'entry-titlebar-text'}>
              <div className={'entry-titlebar-username'}>{username}</div>
              <div className={'entry-titlebar-date'}>{date}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={'entry-text'}>
        {entry}
      </div>
    </div>
  )
}
