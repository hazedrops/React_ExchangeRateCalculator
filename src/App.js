import { useState, useEffect } from 'react';
import money from './img/money.png';
import CurrencySelection from './CurrencySelection';

function App() {
  const [currencyOne, setCurrencyOne] = useState("USD");
  const [currencyTwo, setCurrencyTwo] = useState("USD");
  
  const [isSwapped, setIsSwapped] = useState(false);

  const [curOneValue, setCurOneValue] = useState(1);
  const [curTwoValue, setCurTwoValue] = useState(1);

  const [rate, setRate] = useState(1);

  const changeCurrencyOne = (e) => {
    setCurrencyOne(e.value);
  }

  const changeCurrencyTwo = (e) => {
    setCurrencyTwo(e.value);
  }

  const changeCurrencyOneValue = (e) => {
    setCurOneValue(e.target.value);
    console.log("curOneValue here...", curOneValue);
    console.log(typeof(curOneValue));
  }

  const changeCurrencyTwoValue = (e) => {
    setCurTwoValue(e.target.value);
    console.log("curTwoValue here...", curTwoValue);
  }

  const handleSwap = (e) => {
    e.preventDefault();    

    // Set isSwapped to the opposite state
    setIsSwapped(!isSwapped);

    // Set curOneValue to 1
    setCurOneValue(1);

    // Calculate the swapped currencies
    const oneTemp = currencyOne;
    const twoTemp = currencyTwo;

    setCurrencyOne(twoTemp);
    setCurrencyTwo(oneTemp);

    console.log("Here1 ", currencyOne);
    console.log("Here2 ", currencyTwo);

    calculate(currencyOne, currencyTwo);
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
    calculate(currencyOne, currencyTwo);
  }, [currencyOne, currencyTwo, isSwapped]);

  return (
    <div className="App">
      <img src={money} alt="Money Logo" className="money-img" />
      <h1>Exchange Rate Calculator</h1>
      <p>Choose the currency and the amounts to get the exchange rate</p>

      <div className="container">
        <div className="currency">
          {/* <CurrencySelection changeValue={changeCurrencyOne} currency={currencyOne}  />
           */}
          <CurrencySelection changeValue={changeCurrencyOne} currency={currencyOne}  />
          <input 
            type="number" 
            placeholder="0" 
            // defaultValue={curOneValue.toFixed(2)}    
            value={ (curOneValue * 1).toFixed(2) }                
            onChange={changeCurrencyOneValue}
          />
        </div>

        <div className="swap-rate-container">
          <button className="btn" onClick={handleSwap}>
            Swap
          </button>
          <div className="rate">1 {currencyOne} = {rate} {currencyTwo}</div>
        </div>

        <div className="currency">
          <CurrencySelection changeValue={changeCurrencyTwo} currency={currencyTwo} />
          <input 
            type="number" 
            // defaultValue={ (curTwoValue* rate).toFixed(2) } 
            value={ (curOneValue * rate).toFixed(2) } 
            placeholder="0" 
            onChange={changeCurrencyTwoValue}
          />          
        </div>
      </div>
    </div>
  );
}

export default App;
