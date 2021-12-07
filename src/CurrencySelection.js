import Select from 'react-select';

const options = [
  { value: "AED", label: "AED" }, 
  { value: "ARS", label: "ARS" }, 
  { value: "AUD", label: "AUD" }, 
  { value: "BGN", label: "BGN" }, 
  { value: "BRL", label: "BRL" }, 
  { value: "BSD", label: "BSD" }, 
  { value: "CAD", label: "CAD" }, 
  { value: "CHF", label: "CHF" }, 
  { value: "CLP", label: "CLP" }, 
  { value: "CNY", label: "CNY" }, 
  { value: "COP", label: "COP" }, 
  { value: "CZK", label: "CZK" }, 
  { value: "DKK", label: "DKK" }, 
  { value: "DOP", label: "DOP" }, 
  { value: "EGP", label: "EGP" }, 
  { value: "EUR", label: "EUR" }, 
  { value: "FJD", label: "FJD" }, 
  { value: "GBP", label: "GBP" }, 
  { value: "GTQ", label: "GTQ" }, 
  { value: "HKD", label: "HKD" }, 
  { value: "HRK", label: "HRK" }, 
  { value: "HUF", label: "HUF" }, 
  { value: "IDR", label: "IDR" }, 
  { value: "ILS", label: "ILS" }, 
  { value: "INR", label: "INR" }, 
  { value: "ISK", label: "ISK" }, 
  { value: "JPY", label: "JPY" }, 
  { value: "KRW", label: "KRW" }, 
  { value: "KZT", label: "KZT" }, 
  { value: "MXN", label: "MXN" }, 
  { value: "MYR", label: "MYR" }, 
  { value: "NOK", label: "NOK" }, 
  { value: "NZD", label: "NZD" }, 
  { value: "PAB", label: "PAB" }, 
  { value: "PEN", label: "PEN" }, 
  { value: "PHP", label: "PHP" }, 
  { value: "PKR", label: "PKR" }, 
  { value: "PLN", label: "PLN" }, 
  { value: "PYG", label: "PYG" }, 
  { value: "RON", label: "RON" }, 
  { value: "RUB", label: "RUB" }, 
  { value: "SAR", label: "SAR" }, 
  { value: "SEK", label: "SEK" }, 
  { value: "SGD", label: "SGD" }, 
  { value: "THB", label: "THB" }, 
  { value: "TRY", label: "TRY" }, 
  { value: "TWD", label: "TWD" }, 
  { value: "UAH", label: "UAH" }, 
  { value: "USD", label: "USD" }, 
  { value: "UYU", label: "UYU" }, 
  { value: "VND", label: "VND" }, 
  { value: "ZAR", label: "ZAR" }
];

const CurrencySelection = ({ changeValue, currency }) => {

  console.log(currency);
  console.log(typeof(currency));

  const selectedCurrency = {
    value: currency, 
    label: currency
  }

  console.log(selectedCurrency);

  return (
    <Select 
      options = {options} 
      value={selectedCurrency}
      menuPlacement="top"
      onChange={changeValue}
    /> 
  )
}

export default CurrencySelection;

