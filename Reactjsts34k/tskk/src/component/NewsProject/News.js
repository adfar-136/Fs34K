import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'

export default function News() {
    const [news,setNews]  =useState([])
    const getNews=async()=>{
      let data =await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-05-24&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
      const jsonData =await data.json()
      setNews(jsonData.articles)
      console.log(news)
    }
    useEffect(()=>{
       getNews()
    })
  return (
    <div className='container'>
        <h2>Adfar News Network</h2>
        <div className="row">
        {news.map((item,index)=>{
            return <div className="col-md-4">
                <Newsitem title={item.title.slice(0,20)} description={item.description.slice(0,80)} image={item.urlToImage} url={item.url}/>
            </div>
        })}
        </div>
       
      
       
    </div>
  )
}
