
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Layouto from './Layout/Layouto';

const CountryCurrencyApi = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

 const [countries, setCountries] = useState([]);
  const [errors, setErrors] = useState(null);

 useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
        setErrors(null);
      } catch (errors) {
        console.error('Error fetching countries:', errors);
        setErrors('An error occurred while fetching data');
        setCountries([]);
      }
    };

    fetchCountries();
  }, []);


const handleSearch = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`);
      if (response.data.length === 0) {
        setError('Country not found');
        setCountry(null);
      } else {
        setError(null);
        setCountry(response.data[0]);
      }
    } catch (error) {
      console.error('Error searching for country:', error);
      setError('Invalis search');
      setCountry(null);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
<>
<Layouto>
<div className='container position-relative'>

 <div >
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search Country Here"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          disabled={searchQuery.length === 0}
          className="search-button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {error && <p>{error}</p>}
      {country && (
        <div className="country-card">
          <div className="card-image">
            <img src={country.flags.png} alt="Country Flag" />
          </div>
          <div className="card-details">
            <h2>{country.name.common}</h2>
            {country.currencies && (
              <div>
                {Object.entries(country.currencies).map(([code, currency]) => (
                  <div key={code}>
                    <p>
                      Currency: {currency.name} ({currency.symbol})
                    </p>
                    <p>Code: {code}</p>
                  </div>
                ))}
              </div>
            )}
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      )}
    </div>
<div className="container" style={{ marginTop: "50px" }}>
  {error && <p className="error">{error}</p>}
  {countries.length > 0 ? (
    <div>
      <div className="row header">
        <div className="column">Flag</div>
        <div className="column">Country</div>
        <div className="column">Currency</div>
        <div className="column">Code</div>
        <div className="column">Symbol</div>
        <div className="column">Capital</div>
        <div className="column">Region</div>
      </div>
      {countries.map((country) => (
        <div className="row" key={country.name}>
          <div className="column">
            {country.flags && country.flags.png && (
              <img
                src={country.flags.png}
                alt="Flag"
                className="flag-image"
              />
            )}
          </div>
          <div className="column">{country.name}</div>
          <div className="column">
            {country.currencies && country.currencies.length > 0 ? (
              <p>{country.currencies[0].name}</p>
            ) : (
              <p>--</p>
            )}
          </div>
          <div className="column">
            {country.currencies && country.currencies.length > 0 ? (
              <p>{country.currencies[0].code}</p>
            ) : (
              <p>--</p>
            )}
          </div>
          <div className="column">
            {country.currencies && country.currencies.length > 0 ? (
              <p>{country.currencies[0].symbol}</p>
            ) : (
              <p>--</p>
            )}
          </div>
          <div className="column">{country.capital}</div>
          <div className="column">{country.region}</div>
        </div>
      ))}
    </div>
  ) : (
    <p className="no-countries">No countries found</p>
  )}
</div>

 </div>

   </Layouto>

    </>

  );
};

export default CountryCurrencyApi;