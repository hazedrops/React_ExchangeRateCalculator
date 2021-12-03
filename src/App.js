import { useState, useEffect } from 'react';
import money from './img/money.png';
import CurrencySelection from './CurrencySelection';

function App() {
  const [valueOne, setValueOne] = useState("USD");
  const [valueTwo, setValueTwo] = useState("USD");

  // const [currencyOne, setCurrencyOne] = useState("");
  // const [currencyTwo, setCurrencyTwo] = useState("");

  const [curOneValue, setCurOneValue] = useState(1);
  const [curTwoValue, setCurTwoValue] = useState(1);

  const [rate, setRate] = useState(1);

  const changeValueOne = (e) => {
    setValueOne(e['value']);
    // console.log("in the on change", valueOne);
  }

  const changeValueTwo = (e) => {
    setValueTwo(e['value']);
    // console.log("in the on change", valueOne);
  }

  const handleSwap = (e) => {
    e.preventDefault();

    // Swap the selected options


    // Calculate the swapped currencies
    const oneTemp = valueOne;
    const twoTemp = valueTwo;

    setValueOne(twoTemp);
    setValueTwo(oneTemp);

    // changeValueOne(e);
    // changeValueTwo(e);

    console.log("Here1 ", valueOne);
    console.log("Here2 ", valueTwo);

    calculate(valueOne, valueTwo);
  };

  const calculate = (first, second) => {
    // setCurrencyOne(first);
    // setCurrencyTwo(second);

    fetch(`https://api.exchangerate-api.com/v4/latest/${first}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // console.log(first);
        // console.log(second);
        setRate(data.rates[second]);
        // console.log("rate!!!", rate);

        // rateEl.innerText = `1 ${currency_one} = ${rate} ${currencyTwo}`;

        // amountEl_two.value = (amountEl_one.value * rate).toFixed(2); // toFixed(2) rounds the number to the two decimal pointed number
      });
  }

  useEffect(() => {
    // console.log("value 1 changed to ", valueOne);
    // console.log("value 2 changed to ", valueTwo);
    calculate(valueOne, valueTwo);
  }, [valueOne, valueTwo, changeValueOne, changeValueTwo]);

  return (
    <div className="App">
      <img src={money} alt="Money Logo" className="money-img" />
      <h1>Exchange Rate Calculator</h1>
      <p>Choose the currency and the amounts to get the exchange rate</p>

      <div className="container">
        <div className="currency">
          <CurrencySelection changeValue={changeValueOne} />
          <input type="number" placeholder="0" value={curOneValue.toFixed(2)} />
        </div>

        <div className="swap-rate-container">
          <button className="btn" onClick={handleSwap}>
            Swap
          </button>
          <div className="rate">1 {valueOne} = {rate} {valueTwo}</div>
        </div>

        <div className="currency">
          <CurrencySelection changeValue={changeValueTwo} />
          <input type="number" value={ (curTwoValue* rate).toFixed(2) } placeholder="0" />          
        </div>
      </div>
    </div>
  );
}

export default App;
