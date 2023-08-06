import React, { useState, useEffect } from 'react';
import Layouto from './Layout/Layouto';
const CurrencyConvertor = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    // Fetch currency options from API
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        setCurrencyOptions(Object.keys(data.rates));
        setFromCurrency('USD');
        setToCurrency('EUR');
      })
      .catch(error => console.log('Error fetching currency options:', error));
  }, []);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  useEffect(() => {
    // Fetch conversion rate from API and calculate converted amount
    if (fromCurrency !== '' && toCurrency !== '') {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
          const conversionRate = data.rates[toCurrency];
          const convertedValue = (amount * conversionRate).toFixed(2);
          setConvertedAmount(convertedValue);
        })
        .catch(error => console.log('Error fetching conversion rate:', error));
    }
  }, [fromCurrency, toCurrency, amount]);


// ????????
  
// ?????????????????????
  return (
<Layouto>
    <div className="container position-relative">
      <h2 className="text-center news-heading">Currency Converter</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="form-group">
            <p className='golden'>From:</p>
            <select
              id="fromCurrency"
              className="form-control"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
            >
              {currencyOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <p className='golden'> Amount:</p>
            <input
              type="number"
              id="amount"
              className="form-control"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <p className='golden'>To:</p>
            <select

              id="toCurrency"
              className="form-control"
              value={toCurrency}
              onChange={handleToCurrencyChange}
            >
              {currencyOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <p className='golden'>Converted Amount:</p>
            <input
              style={{backgroundColor:" rgb(189, 188, 188)"}}
              type="text"
              id="convertedAmount"
              className="form-control" 
              value={convertedAmount}
              readOnly
            />
          </div>
        </div>
      </div>

    </div>
</Layouto>
  );
};

export default CurrencyConvertor;
