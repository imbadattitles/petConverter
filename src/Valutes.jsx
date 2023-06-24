import React from 'react'

const Valutes = ({setCurrency, currency, allCur}) => {
  return (
    <div style={{width:'100%'}}>
        <div style={{width:'100%'}}>
          <ul className='valutes'>
        {allCur.map(cur => 
          <li style={{fontSize:'14px'}} className={currency === cur[0] ? 'active' : ''} onClick={() => {setCurrency(cur[0])}}>{cur[0]}</li>
        )}
          </ul>
        </div>
    </div>
  )
}

export default Valutes