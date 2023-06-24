import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import './News.css';

export default function News() {
  const [news, setNews] = useState([]);
  const [searchnews, setSearchnews] = useState('');

  const getNews = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${searchnews}&from=2023-05-24&sortBy=publishedAt&apiKey=d4ed6824421249c6b8c19bbc55e5b6ae`
    );
    const jsonData = await data.json();
    setNews(jsonData.articles);
  };

  useEffect(() => {
    getNews();
  }, [searchnews]);

  const handleSearch = (e) => {
    e.preventDefault();
    getNews();
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Adfar News Network</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="search"
            placeholder="Search news"
            value={searchnews}
            onChange={(e) => setSearchnews(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </header>
    {news && (
      <div className="row">
        {news.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Newsitem
              title={item.title?item.title.slice(0,20):""}
              description={item.description?item.description.slice(0,75):""}
              image={item.urlToImage?item.urlToImage:"https://techcrunch.com/wp-content/uploads/2023/04/GettyImages-1251935804.jpg?resize=1200,798"}
              url={item.url}
            />
          </div>
        ))}
      </div>)}
    </div>
  );
}
