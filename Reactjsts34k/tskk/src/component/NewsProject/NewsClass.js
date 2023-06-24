import React, { Component } from 'react'
import Newsitem from './Newsitem'


export default class NewsClass extends Component {
    constructor(){
        super()
        this.state = {
            news:[]
        }
    }
    async componentDidMount(){
        let url =await fetch("https://newsapi.org/v2/everything?q=cricket&from=2023-05-24&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e")
        let jsonData =await url.json()
        this.setState({news:jsonData.articles})
    }
  render() {
    return (
      <div className='container'>
        <div className="row">
            {this.state.news.map((item,index)=>{
                 return <div className="col-md-4">
                 <Newsitem title={item.title.slice(0,20)} description={item.description.slice(0,80)} image={item.urlToImage} url={item.url}/>
             </div>
            })}
        </div>
        
      </div>
    )
  }
}
