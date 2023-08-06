import React, { useState, useEffect } from 'react';
import Layouto from './Layout/Layouto';
const CurrencyNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencyNews = async () => {
      const apiKey = '59cb7ccfd8b24ac183f99721751768c4';
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const fetchedArticles = data.articles || [];
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchCurrencyNews();
  }, []);

  return (
<Layouto>
    <div className='container position-relative' style={{marginTop:'100px'}}>
    {/* <h2 className="news-heading">Currency Daily News</h2>
       */}
<h2 className="news-heading" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
      <marquee behavior="scroll" direction="left">
 Currency Daily News &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Currency Daily News      </marquee>
    </h2>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <div className="row mx-3 my-3">
          {articles.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={article.urlToImage} className="card-img-top" alt="Article" />
                <div className="card-body">
                  <h3 className="card-title">{article.title ? article.title.slice(0, 45) : ''}</h3>
                  <p className="card-text">
                    {article.description ? article.description.slice(0, 88) : ''}...
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
</Layouto>
  );
};

export default CurrencyNews;
