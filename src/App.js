import React, { useEffect, useState } from 'react';
import Block from './Block';
import './index.scss';
import Info from './Info';
import Valutes from './Valutes';
import Anekdotz from './Anekdotz';

function App() {

  const [rates, setRates] = useState({})
  const [firstCurrency, setFirstCurrency] = useState('RUB')
  const [secondCurrency, setSecondCurrency] = useState('USD')

  const [firstValue, setFirstValue] = useState() 
  const [secondValue, setSecondValue] = useState(1)


  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => res.json())
      .then((json) => {
        const RUB = {Nominal: 1, Value: 1, Name: 'Российский рубль'}
        const mix = {...json.Valute, RUB}
        setRates(mix)
      })
      .catch((err) => {
        console.warn(err);
        alert('Не удалось получить информацию')
      })
  }, [])

  const AllCur = Object.entries(rates)

  

  useEffect(() => {
    changeSecondValue(secondValue);
  }, [secondCurrency])

  useEffect(() => {
    changeFirstValue(firstValue);
  }, [firstCurrency])

  useEffect(() => {
    changeSecondValue(secondValue);
  }, [rates])




  const changeFirstValue = (value) => {
        const price = rates[firstCurrency]?.Value / rates[secondCurrency]?.Value
        const result = value * price
        setFirstValue(value)
        setSecondValue(result.toFixed(2))
  }


  const changeSecondValue = (value) => {
      const price = rates[secondCurrency]?.Value / rates[firstCurrency]?.Value
      const result = value * price
      setFirstValue(result.toFixed(2))
      setSecondValue(value)
  }

console.log(firstCurrency)




  return (
    <div className="App">
      <Valutes setCurrency={setFirstCurrency} allCur={AllCur} currency={firstCurrency}/>
      <Valutes setCurrency={setSecondCurrency} allCur={AllCur} currency={secondCurrency}/>
      <Info currency={firstCurrency} AllCur={AllCur}/>
      <Info currency={secondCurrency} AllCur={AllCur}/>
      <Block value={firstValue} onChangeValue={changeFirstValue} allCur={AllCur} currency={firstCurrency} onChangeCurrency={setFirstCurrency} />
      <Block value={secondValue} onChangeValue={changeSecondValue} allCur={AllCur} currency={secondCurrency} onChangeCurrency={setSecondCurrency}/>
      <Anekdotz/>
    </div>
  );
}

export default App;
