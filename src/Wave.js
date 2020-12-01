import './Wave.css'

import anime from 'animejs'
import { useEffect } from 'preact/hooks'

export default function Wave (props) {
  const semiUniqueValue = Math.round(Math.random() * 10000)
  useEffect(() => {
    anime({
      targets: `.wave-path-${semiUniqueValue}`,
      d: 'm-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z',
      easing: 'easeInOutSine',
      duration: Math.random() * 10000 + 4000,
      loop: true,
      delay: Math.random() * 1000,
      direction: 'alternate'
    })
  }, [])

  const {
    height = 0,
    color = '#ffffff',
    priority = 1
  } = props

  return (
    <>
      <div className={'wave-fill'} style={{
        background: color,
        height: Math.max(0, height + 10),
        zIndex: -priority
      }}/>
      <svg
        width="600"
        height="280"
        viewBox="0 0 600 280"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsSvg="http://www.w3.org/2000/svg"
        className={'wave'}
        style={{
          top: height,
          zIndex: -priority
        }}
      >
        <g>
          <path
            className={`wave-path-${semiUniqueValue}`}
            id="svg_4"
            d="m-2,-52.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-145.92534,122.88948 -463.85068,-190.88945 -641.77607,0l0,-296.80101z"
            fill={color}
          />
        </g>
      </svg>
    </>
  )
}
