import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Coin from '../Coin.js';
import Layouto from './Layout/Layouto.js';

const Coinapi = () => {
    const [coins,setCoins] = useState([])
  const [search,setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
       setCoins(res.data)
       console.log(res.data)
    }).catch(error=>console.log(error))
  }, [])
  const handleChange = e =>{
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
<Layouto>
    <div className="coin-app container position-relative">

 <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search Crypto Here" onChange={handleChange}
      />
      <button className="search-button">Search</button>
    </div>

  <div style={{marginTop:'50px'}}>

        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    
                    <h1>Currency</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Price</p>
                     
                        <p className="coin-percent">State</p>
                  
                        {/* <p className="coin-percent green">State</p> */}
                    
                
                {/* <p className="coin-marketcap">
                    Mkt Cap: Rs.{marketcap}
                </p> */}
                </div>
            </div>
            
        </div>


      {filteredCoins.map(coin=>{
        return(
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          pricechange={coin.price_change_percentage_24h}
//           volume={coin.total_volume}
          />
        );
      })}

</div>
    </div>
</Layouto>
  );
}

export default Coinapi
