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
        <a className={'calendar-entry active'} href={'#entry-1'}>1</a>
        <a className={'calendar-entry active'} href={'#entry-2'}>2</a>
        <a className={'calendar-entry active'} href={'#entry-3'}>3</a>
        <a className={'calendar-entry active'} href={'#entry-4'}>4</a>
        <a className={'calendar-entry active'} href={'#entry-5'}>5</a>
      </div>
      <div className={'calendar-row'}>
        <a className={'calendar-entry active'} href={'#entry-6'}>6</a>
        <a className={'calendar-entry active'} href={'#entry-7'}>7</a>
        <a className={'calendar-entry active'} href={'#entry-8'}>8</a>
        <a className={'calendar-entry active'} href={'#entry-9'}>9</a>
        <a className={'calendar-entry active'} href={'#entry-10'}>10</a>
        <a className={'calendar-entry active'} href={'#entry-11'}>11</a>
        <a className={'calendar-entry active'} href={'#entry-12'}>12</a>
      </div>
      <div className={'calendar-row'}>
        <a className={'calendar-entry active'} href={'#entry-13'}>13</a>
        <a className={'calendar-entry active'} href={'#entry-14'}>14</a>
        <a className={'calendar-entry active'} href={'#entry-15'}>15</a>
        <a className={'calendar-entry active'} href={'#entry-16'}>16</a>
        <a className={'calendar-entry active'} href={'#entry-17'}>17</a>
        <a className={'calendar-entry active'} href={'#entry-18'}>18</a>
        <a className={'calendar-entry active'} href={'#entry-19'}>19</a>
      </div>
      <div className={'calendar-row'}>
        <a className={'calendar-entry active'} href={'#entry-20'}>20</a>
        <a className={'calendar-entry active'} href={'#entry-21'}>21</a>
        <a className={'calendar-entry active'} href={'#entry-22'}>22</a>
        <a className={'calendar-entry active'} href={'#entry-23'}>23</a>
        <a className={'calendar-entry active'} href={'#entry-24'}>24</a>
        <a className={'calendar-entry active'} href={'#entry-25'}>25</a>
        <a className={'calendar-entry active'} href={'#entry-26'}>26</a>
      </div>
      <div className={'calendar-row'}>
        <a className={'calendar-entry active'} href={'#entry-27'}>27</a>
        <a className={'calendar-entry active'} href={'#entry-28'}>28</a>
        <a className={'calendar-entry active'} href={'#entry-29'}>29</a>
        <a className={'calendar-entry active'} href={'#entry-30'}>30</a>
        <a className={'calendar-entry active'} href={'#entry-31'}>31</a>
        <a className={'calendar-entry active'} href={'#entry-32'}>1</a>
        <div className={'calendar-entry inactive'}>2</div>
      </div>
    </div>
  )
}
