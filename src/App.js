import { useState } from 'react';
import money from './img/money.png';
import Select from 'react-select';

function App() {
  const [valueOne, setValueOne] = useState("USD");
  const [valueTwo, setValueTwo] = useState("KRW");

  const handleChangeOne = (e) => {
    setValueOne(e.target.value);
  };

  const handleChangeTwo = (e) => {
    setValueTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Need to handle the swap action

  };

  return (
    <div className="App">
      <img src={money} alt="Money Logo" className="money-img" />
      <h1>Exchange Rate Calculator</h1>
      <p>Choose the currency and the amounts to get the exchange rate</p>

      <div className="container">
        <div className="currency">
          <select id="currency-one" onChange={handleChangeOne}>            
            <option value="AED">AED</option>
            <option value="ARS">ARS</option>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="BSD">BSD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CLP">CLP</option>
            <option value="CNY">CNY</option>
            <option value="COP">COP</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="DOP">DOP</option>
            <option value="EGP">EGP</option>
            <option value="EUR">EUR</option>
            <option value="FJD">FJD</option>
            <option value="GBP">GBP</option>
            <option value="GTQ">GTQ</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="KZT">KZT</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PAB">PAB</option>
            <option value="PEN">PEN</option>
            <option value="PHP">PHP</option>
            <option value="PKR">PKR</option>
            <option value="PLN">PLN</option>
            <option value="PYG">PYG</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SAR">SAR</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
            <option value="UAH">UAH</option>
            <option value="USD" selected>USD</option>
            <option value="UYU">UYU</option>
            <option value="VND">VND</option>
            <option value="ZAR">ZAR</option>
          </select>

          <input type="number" id="amount-one" placeholder="0" value="1" />
        </div>

        <div className="swap-rate-container">
          <button className="btn" onClick={handleSubmit}>
            Swap
          </button>
          <div className="rate"></div>
        </div>

        <div className="currency">
          <select id="currency-two" onChange={handleChangeTwo}>            
            <option value="AED">AED</option>
            <option value="ARS">ARS</option>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="BSD">BSD</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CLP">CLP</option>
            <option value="CNY">CNY</option>
            <option value="COP">COP</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="DOP">DOP</option>
            <option value="EGP">EGP</option>
            <option value="EUR">EUR</option>
            <option value="FJD">FJD</option>
            <option value="GBP">GBP</option>
            <option value="GTQ">GTQ</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW" selected>KRW</option>
            <option value="KZT">KZT</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PAB">PAB</option>
            <option value="PEN">PEN</option>
            <option value="PHP">PHP</option>
            <option value="PKR">PKR</option>
            <option value="PLN">PLN</option>
            <option value="PYG">PYG</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SAR">SAR</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="TWD">TWD</option>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="UYU">UYU</option>
            <option value="VND">VND</option>
            <option value="ZAR">ZAR</option>
          </select>

          <input type="number" id="amount-two" placeholder="0" />          
        </div>
      </div>
    </div>
  );
}

export default App;
