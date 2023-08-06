import React from 'react';
import { Link } from 'react-router-dom';
import Layouto from './Layout/Layouto';
const Homepage = () => {
  return (

<Layouto>
    <div>
  <main>
  <div className="intro">
    <h1>Welcome To MudrRa</h1>
    <p>This a platform where you get all updates of currencies</p>
  
   
  </div>
  <div className="achievements">
    <div className="work">
    <Link to="/Converter">
      <button style={{backgroundColor:'black'}}>0</button>
      </Link>
      <p className="work-heading">Exchange Rates</p>
      <p className="work-text">The exchange rate is the value of one currency in terms of another currency. It determines how much of one currency you can exchange for a certain amount of another currency.</p>
    </div>
    <div className="work">
      <Link to="/News">
      <button style={{backgroundColor:'black'}}>0</button>
      </Link>
      <p className="work-heading">News</p>
      <p className="work-text">Market participants, including financial institutions, multinational corporations, and individual traders, rely on currency news to analyze market conditions, identify trading opportunities, and manage currency-related risks. They often track news sources, economic calendars, and analysis reports to stay informed about the latest developments that may affect currency movements.</p>
    </div>
    <div className="work">
      <Link to="/Country">
      <button style={{backgroundColor:'black'}}>0</button>
      </Link>
      <p className="work-heading">Currency</p>
      <p className="work-text">currencies and their respective countries. There are many more currencies used around the world, each associated with its own country or group of countries.</p>
    </div>
  </div>
  
</main>

    </div>

</Layouto>
  );
};

export default Homepage;

