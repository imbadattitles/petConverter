
import React, { useState } from 'react'

const Block = ({ value, currency, onChangeValue, onChangeCurrency, allCur }) => {
  const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GEL', 'KZT'];
  const [hidden, setHidden] = useState(false)

  const toggleHidden = () => {
    if (hidden) setHidden(false)
    if (!hidden) setHidden(true)
  }

  return (
    <div style={{position: 'relative'}}  className="block">
    <ul className="currencies">
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? 'active' : ''}
          key={cur}>
          {cur}
        </li>
      ))}
      <li onClick={() => toggleHidden()}>
        <svg height="50px" viewBox="0 0 50 50" width="50px">
          <rect fill="none" height="50" width="50" />
          <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
        </svg>
      </li>
    </ul>
    <ul style={hidden ? {display:'block'} : {display:'none'}} className="currencies">
    <li style={hidden ? {position: 'absolute',top: '-50px',left: '-20px', display:'grid', gridTemplateColumns:'50px 50px 50px 50px 50px', background: 'white'} :{display: 'none'}}>
        {allCur.map((cur) => (
          <li style={{fontSize:'14px'}} className={currency === cur[0] ? 'active' : ''} onClick={() => {onChangeCurrency(cur[0]); setHidden(false)}}>{cur[0]}</li>
        ))}
      </li>
      </ul>
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
    />
  </div>
  )
}

export default Block


