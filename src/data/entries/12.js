import icon from '../icons/oaxith.webp'
// import audio from '../audio/oaxith.mp3'

export default (
  <>
  <div className={'jp'}>
    <strong>2021 アドベントカレンダー 12</strong>
  </div>
  <div className={'jp'}>
    <p>私のエントリーは録音になります！ぜひ聞いて下さい！（ヘッドフォンを推奨します）<br />
    録音とスクリプトに相違が出たので、内容を合わせてから#correct_meの方で投稿します。</p>
  </div>
  <audio controls>
    {/* <source src={audio} type="audio/mpeg" /> */}
  </audio>
  </>
)

export const metadata = {
  alias: 'oaxith',
  username: 'oaxith#9001',
  id: '185051004763504640',
  index: 12,
  date: 'December 12',
  icon: icon
}
