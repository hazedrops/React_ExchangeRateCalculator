import { useState, useEffect } from 'react';
import money from './img/money.png';
import CurrencySelection from './CurrencySelection';

function App() {
  const [valueOne, setValueOne] = useState("USD");
  const [valueTwo, setValueTwo] = useState("USD");
  
  const [isSwapped, setIsSwapped] = useState(false);

  const [curOneValue, setCurOneValue] = useState(1);
  const [curTwoValue, setCurTwoValue] = useState(1);

  const [rate, setRate] = useState(1);

  const changeValueOne = (e) => {
    setValueOne(e.value);
  }

  const changeValueTwo = (e) => {
    setValueTwo(e.value);
  }

  const handleSwap = (e) => {
    e.preventDefault();    

    // set isSwapped to the opposite state
    setIsSwapped(!isSwapped);

    // Calculate the swapped currencies
    const oneTemp = valueOne;
    const twoTemp = valueTwo;

    setValueOne(twoTemp);
    setValueTwo(oneTemp);

    console.log("Here1 ", valueOne);
    console.log("Here2 ", valueTwo);

    calculate(valueOne, valueTwo);
  };

  const calculate = (first, second) => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${first}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRate(data.rates[second]);
      });
  }

  useEffect((e) => {
    calculate(valueOne, valueTwo);
  }, [valueOne, valueTwo, isSwapped]);

  return (
    <div className="App">
      <img src={money} alt="Money Logo" className="money-img" />
      <h1>Exchange Rate Calculator</h1>
      <p>Choose the currency and the amounts to get the exchange rate</p>

      <div className="container">
        <div className="currency">
          <CurrencySelection changeValue={changeValueOne} currency={valueOne}  />
          <input type="number" placeholder="0" value={curOneValue.toFixed(2)} />
        </div>

        <div className="swap-rate-container">
          <button className="btn" onClick={handleSwap}>
            Swap
          </button>
          <div className="rate">1 {valueOne} = {rate} {valueTwo}</div>
        </div>

        <div className="currency">
          <CurrencySelection changeValue={changeValueTwo} currency={valueTwo} />
          <input type="number" value={ (curTwoValue* rate).toFixed(2) } placeholder="0" />          
        </div>
      </div>
    </div>
  );
}

export default App;
