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
        <div className={'calendar-entry'}>1</div>
        <div className={'calendar-entry'}>2</div>
        <div className={'calendar-entry'}>3</div>
        <div className={'calendar-entry'}>4</div>
        <div className={'calendar-entry'}>5</div>
      </div>
      <div className={'calendar-row'}>
        <div className={'calendar-entry'}>6</div>
        <div className={'calendar-entry'}>7</div>
        <div className={'calendar-entry'}>8</div>
        <div className={'calendar-entry'}>9</div>
        <div className={'calendar-entry'}>10</div>
        <div className={'calendar-entry'}>11</div>
        <div className={'calendar-entry'}>12</div>
      </div>
      <div className={'calendar-row'}>
        <div className={'calendar-entry'}>13</div>
        <div className={'calendar-entry'}>14</div>
        <div className={'calendar-entry'}>15</div>
        <div className={'calendar-entry'}>16</div>
        <div className={'calendar-entry'}>17</div>
        <div className={'calendar-entry'}>18</div>
        <div className={'calendar-entry'}>19</div>
      </div>
      <div className={'calendar-row'}>
        <div className={'calendar-entry'}>20</div>
        <div className={'calendar-entry'}>21</div>
        <div className={'calendar-entry'}>22</div>
        <div className={'calendar-entry'}>23</div>
        <div className={'calendar-entry'}>24</div>
        <div className={'calendar-entry'}>25</div>
        <div className={'calendar-entry'}>26</div>
      </div>
      <div className={'calendar-row'}>
        <div className={'calendar-entry'}>27</div>
        <div className={'calendar-entry'}>28</div>
        <div className={'calendar-entry'}>29</div>
        <div className={'calendar-entry'}>30</div>
        <div className={'calendar-entry'}>31</div>
        <div className={'calendar-entry inactive'}>1</div>
        <div className={'calendar-entry inactive'}>2</div>
      </div>
    </div>
  )
}
