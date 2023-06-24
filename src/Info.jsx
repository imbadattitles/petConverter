import React from 'react'

const Info = ({currency, AllCur}) => {
    console.log(currency)
    console.log(AllCur)

    // const thisFirst = (element) => {
    //     for (let i = 0; i < AllCur.length; i++) {
    //         if (element === AllCur[i].firstCurrency) {
    //             console.log('ad')
    //         }
    //     }
        
    // }


  return (
    <div className='info'>
                {AllCur.map((cur) => (
          <div style={(currency === cur[0]) ? {display:'block'} : {display:'none'}}>
            <div style={{fontSize:'20px', fontWeight:'800', color:'#16b67f', marginBottom:'5px'}}>{cur[1].Nominal} '{cur[1].Name}'</div>
            <div style={{color:'grey', marginBottom:'30px'}}>Цена за номинал = {cur[1].Value} рублей</div>
          </div>
        ))}
    </div>
  )
}

export default Info