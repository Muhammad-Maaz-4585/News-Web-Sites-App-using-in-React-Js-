import React, { Component } from 'react'
import NewsItems from './components/NewsItems'
import Spinner from './components/Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
 
  static defaultProps = {
    country: 'us',
    pageSize: 3,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }

   constructor(){
    super();
    console.log("my anme is maaz")
    this.state = {
        articles: [],
        loading: false,
        page: 1
    }
   }

  //  async updateNews (){
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=8399a5d0ef894d918deb0a08b0070a99&
  //   page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({Spinner: true}); 
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({articles: parsedData.articles,
  //      totalResults: parsedData.totalResults,
  //      Spinner: false
  //     })
  //  }

   async componentDidMount(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=8399a5d0ef894d918deb0a08b0070a99&page=1&pageSize=${this.props.pageSize}`;
    this.setState({Spinner: true}); 
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
       totalResults: parsedData.totalResults,
       Spinner: false
      })
   }

   handlepreclick = async () =>{
       console.log("previous");
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=8399a5d0ef894d918deb0a08b0070a99&page=
       ${this.state.page -1 }&pageSize=${this.props.pageSize}`;
       this.setState({Spinner: true});
       let data = await fetch(url);
       let parsedData = await data.json();
       console.log(parsedData);
       this.setState({
        page: this.state.page -1,
        articles: parsedData.articles,
        Spinner: false
       })

    // this.setState({page: this.state.page - 1});
    // this.updateNews();

          
   }


   handlenextclick = async () =>{
    console.log("next");
    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&country=${this.props.category}&apiKey=8399a5d0ef894d918deb0a08b0070a99&page=${
    this.state.page +1 }&pageSize=${this.props.pageSize}`;
    this.setState({Spinner: true});
    let data = await fetch(url); 
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        page: this.state.page +1,
        articles: parsedData.articles,
        Spinner: false 
       })  
    }  
    // this.setState({page: this.state.page + 1});
    // this.updateNews();
   }
         
        
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin:'40px 0px'}}>US News - Top Headlines</h1>
        {this.state.Spinner && <Spinner/>}
        <div className="row">
            {!this.state.Spinner && this.state.articles.map((Element)=>{
                return <div className="col-md-4" key={Element.url}>
                <NewsItems title={Element.title?Element.title.slice(0, 45):""} description={Element.description?Element.description.slice(0, 88):""}
                 imageurl= {Element.urlToImage} newsurl= {Element.url} author= {Element.author} date={Element.publishedAt}/>
            </div>
            })}
            
        </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlepreclick}> &larr; Previous</button>
       <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr; </button>

       </div>
      </div>
    )
  }
}

export default News
