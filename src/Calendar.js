import './Calendar.css'

export default function Calendar () {
  return (
    <div className={'calendar'}>
      <div className={'calendar-day-names'}>
        <div className={'calendar-day-name'}>日</div>
        <div className={'calendar-day-name'}>月</div>
        <div className={'calendar-day-name'}>火</div>
        <div className={'calendar-day-name'}>水</div>
        <div className={'calendar-day-name'}>木</div>
        <div className={'calendar-day-name'}>金</div>
        <div className={'calendar-day-name'}>土</div>
      </div>
      <div className={'calendar-row'}>
        <div className={'calendar-entry inactive'}>29</div>
        <div className={'calendar-entry inactive'}>30</div>
        <div className={'calendar-entry active'}>1</div>
        <div className={'calendar-entry active'}>2</div>
        <div className={'calendar-entry active'}>3</div>
        <div className={'calendar-entry active'}>4</div>
        <div className={'calendar-entry active'}>5</div>
      </div>
      <div className={'calendar-row'}>
        <div className={'calendar-entry active'}>6</div>
        <div className={'calendar-entry active'}>7</div>
        <div className={'calendar-entry active'}>8</div>
        <div className={'calendar-entry active'}>9</div>
        <div className={'calendar-entry active'}>10</div>
        <div className={'calendar-entry active'}>11</div>
        <div className={'calendar-entry active'}>12</div>
      </div>
      <div className={'calendar-row'}>
        <div className={'calendar-entry active'}>13</div>
        <div className={'calendar-entry active'}>14</div>
        <div className={'calendar-entry active'}>15</div>
        <div className={'calendar-entry active'}>16</div>
        <div className={'calendar-entry active'}>17</div>
        <div className={'calendar-entry active'}>18</div>
        <div className={'calendar-entry active'}>19</div>
      </div>
      <div className={'calendar-row'}>
        <div className={'calendar-entry active'}>20</div>
        <div className={'calendar-entry active'}>21</div>
        <div className={'calendar-entry active'}>22</div>
        <div className={'calendar-entry active'}>23</div>
        <div className={'calendar-entry active'}>24</div>
        <div className={'calendar-entry active'}>25</div>
        <div className={'calendar-entry active'}>26</div>
      </div>
      <div className={'calendar-row'}>
        <div className={'calendar-entry active'}>27</div>
        <div className={'calendar-entry active'}>28</div>
        <div className={'calendar-entry active'}>29</div>
        <div className={'calendar-entry active'}>30</div>
        <div className={'calendar-entry active'}>31</div>
        <div className={'calendar-entry inactive'}>1</div>
        <div className={'calendar-entry inactive'}>2</div>
      </div>
    </div>
  )
}
