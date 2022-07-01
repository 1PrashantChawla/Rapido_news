import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'




export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general"
    // apiKey: "9f170b8121184687808e13ed04e5b416"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
//Constructor sabse Pehle Run hota HAi
  constructor(props) {
    // Constructoe tab run karta hai jab class ka koi object banta hai
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      



    }
    document.title=`${this.capitalizeText(this.props.category)} | Rapido News`
  }

  capitalizeText=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1)
  }

  async updateNews() {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&${this.state.page}&pageSize=${this.props.pageSize}`
    {
      this.setState(
        { loading: true }
        )
      }
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    // let data=await fetch(url); async componentDidMount() likhne se ye wait jarega promise jo ki fetch(url ) se ayega uske resolve hone ka
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false


    })
    
  }

  // componentDidMount  IT WILL RUN AFTERTHE render() method
  // constructor runs first,then render() method and then componentDidMount()
  
  async componentDidMount() {
    this.updateNews();
  }

  // handlePreviousClick = async () => {

  //   this.setState({
  //     page: this.state.page - 1,
  //   })
  //   this.updateNews();
  // }

  
  // handleNextClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   })
  //   this.updateNews();


  // }


  render() {

    return (
      <div className='my-2 container '>
        {/* Prev and Next Buttons */}
        <div className="container my-3 ">
          <div className="container d-flex justify-content-between ">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            {/* HEADLINE */}
            <h2 className='text-center d-flex justify-content-between '>Top {this.capitalizeText(this.props.category)} HeadLines </h2>

            <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} class="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
          </div>
        </div>
        {/* SPINNER */}
       <div className="p-2 text-center " style={{ height: "40px" }}> If this.stae.loading is true show spinner
          {this.state.loading && <Spinner />}
        </div> 


        
        {/* FETCHING DATA FROM THE PARSED JSON  AND DISPLAYING NEWS DYNAMICALLY */}
        <div className="row">
          {/* .map() method is used to iterate over the array and run a particular function for every element of array */}
          {/* jab bhi .map() method use karte hai to hume ek unique key deni padti hai  har ek element ko */}
          {/* is case me hamara news ka url unique hai */}
          {/* !this.state.loading && this.state.articles.map MEANS  {IF LOADING DONT SHOW THE NEWSITEMS} */}
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4 " key={element.url}>
              <NewsItem
                badgeColor={"success"}
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                date={element.publishedAt}
                author={element.author}
                newsChannel={element.source.name} />
            </div>
          })}

        </div>

      </div>

    )
  }

}

export default News