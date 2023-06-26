import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import './News.css';

export default function News() {
  const [news, setNews] = useState([]);
  const [searchnews, setSearchnews] = useState('');
  const [currentPage,setCurrentpage] = useState(1)
  const [totalPages,setTotalPages] = useState(1)
  const pageSize = 6;

  const getNews = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/everything?q=${searchnews}&from=2023-05-26&sortBy=publishedAt&apiKey=4752b0c3962248f1b86ff5519dcb4873&pageSize=${pageSize}&page=${currentPage}`
    );
    const jsonData = await data.json();
    setNews(jsonData.articles);
    if(jsonData.totalResults){
    setTotalPages(Math.ceil(jsonData.totalResults/pageSize))
    }
  };

  useEffect(() => {
    getNews();
  }, [searchnews,currentPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    getNews();
  };
const handlePrevPage = ()=>{
  if(currentPage > 1){
    setCurrentpage(currentPage-1)
  }
}
const handleNextPage = ()=>{
  if( currentPage < totalPages){
    setCurrentpage(currentPage+1 )
  }
}
const handlePagechange = (pageNumber)=>{
  setCurrentpage(pageNumber)
  
}
const renderPagination =()=>{
  const paginationButtons = []
  if(totalPages){
    for(let page = 1;page <= totalPages;page++){
      paginationButtons.push(
        <button onClick={()=>handlePagechange(page)}>{page}</button>
      )

    }
  }
  return paginationButtons
}
  return (
    <><div className="container">
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
    <div className="pagination">
      <button className='pagination-button' onClick={handlePrevPage}>Previous</button>
      {renderPagination()}
      <button className='pagination-button' onClick={handleNextPage}>Next</button>
    </div>
    </>
  );
}
