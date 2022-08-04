import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'




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
      totalResults: 0




    }
    document.title = `${this.capitalizeText(this.props.category)} | Rapido News`
  }

  capitalizeText = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  async updateNews() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&${this.state.page}&pageSize=${this.props.pageSize}`
    {
      this.setState(
        { loading: true }
      )
    }
    const data = await fetch(url);
    var parseData = await data.json();

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
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&${this.state.page}&pageSize=${this.props.pageSize}`
    {
      this.setState(
        { loading: true }
      )
    }
    const data = await fetch(url);
    var parseData = await data.json();

    // let data=await fetch(url); async componentDidMount() likhne se ye wait jarega promise jo ki fetch(url ) se ayega uske resolve hone ka
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false


    })

   
  }

  handlePreviousClick = async () => {
  
    this.setState({
      page: this.state.page - 1,
    })
  
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&${this.state.page}&pageSize=${this.props.pageSize}`
    {
      this.setState(
        { loading: true ,
          }
      )
    }
    const data = await fetch(url);
    var parseData = await data.json();

    // let data=await fetch(url); async componentDidMount() likhne se ye wait jarega promise jo ki fetch(url ) se ayega uske resolve hone ka
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
     


    })


  }
 

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    })
   
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&${this.state.page}&pageSize=${this.props.pageSize}`
    {
      this.setState(
        { loading: true,
        }
      )
    }
    const data = await fetch(url);
    var parseData = await data.json();

    // let data=await fetch(url); async componentDidMount() likhne se ye wait jarega promise jo ki fetch(url ) se ayega uske resolve hone ka
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false


    })



  }

  // fetchMoreData = async () => {
    
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&${this.state.page}&pageSize=${this.props.pageSize}`
  //   this.setState({ page: this.state.page + 1, 
  //     loading:true})

  //   let data = await fetch(url);
  //   let parseData = await data.json();
  
  //   // let data=await fetch(url); async componentDidMount() likhne se ye wait jarega promise jo ki fetch(url ) se ayega uske resolve hone ka
  //   this.setState({
  //     articles: this.state.articles.concat(parseData.articles),
  //     totalResults: parseData.totalResults,
  //     loading: false


  //   })
  // }
  render() {

    return (
      <>
        <div className='my-2 container '>
          {/* Prev and Next Buttons */}

          <div className="container my-3 ">
            <div className="container d-flex justify-content-between ">
              <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>

              <h2 className='text-center d-flex justify-content-between '>Top {this.capitalizeText(this.props.category)} HeadLines </h2>

              <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
            </div>
          </div>
{this.state.loading && <Spinner />}


          {/* FETCHING DATA FROM THE PARSED JSON  AND DISPLAYING NEWS DYNAMICALLY */}
          {/* <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length ===!this.state.totalResults}
           loader={<Spinner/>}
           
           
           > */}
            <div className="container ">

              <div className="row">
                {/* .map() method is used to iterate over the array and run a particular function for every element of array */}
                {/* jab bhi .map() method use karte hai to hume ek unique key deni padti hai  har ek element ko */}
                {/* is case me hamara news ka url unique hai */}
                {/* !this.state.loading && this.state.articles.map MEANS  {IF LOADING DONT SHOW THE NEWSITEMS} */}
                {this.state.articles.map((element) => {
                  return <div className="col-md-4 " key={element.url}>
                    <NewsItem
                      badgeColor={"warning"}
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
            {/* </InfiniteScroll> */}

        </div>

      </>
    )
  }

}

export default News