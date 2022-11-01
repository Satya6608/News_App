import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1
    }
  }
  async getAPIData() {
    try {
      this.setState({page:1})
      let response = ""
      if (this.props.search === "None")
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=${this.props.pageSize}&language=${this.props.language}&page=${this.state.page}&apiKey=29a48493f4d44deebfd65d911af5f581`)
      else
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&pageSize=${this.props.pageSize}&language=${this.props.language}&page=${this.state.page}&apiKey=29a48493f4d44deebfd65d911af5f581`)
      let result = await response.json()
      this.setState({
        articles: result.articles,
        totalResults: result.totalResults

      })
    }
    catch (error) {
      alert("Something Went Wrong")
    }
  }
  fetchData = async()=>{
    this.setState({page:this.state.page+1})
    let response = ""
      if (this.props.search === "None")
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=${this.props.pageSize}&language=${this.props.language}&page=${this.state.page}&apiKey=29a48493f4d44deebfd65d911af5f581`)
      else
        response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&pageSize=${this.props.pageSize}&language=${this.props.language}&page=${this.state.page}&apiKey=29a48493f4d44deebfd65d911af5f581`)
      let result = await response.json()
      this.setState({
        articles: this.state.articles.concat(result.articles)

      })
  }
  componentDidMount() {
    this.getAPIData()
  }
  componentDidUpdate(old) {
    if (this.props !== old)
      this.getAPIData()
  }
  render() {
    return (
      <div className="container-fluid">
        <h5 className='background text-light text-center p-2 mt-2'>{this.props.q} News Section</h5>
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<h5 className=' py-2 text-center'><div className="spinner-border text-he " role="status">
          <span className="visually-hidden">Loading...</span>
        </div></h5>}>
          <div className="row">
            {
              this.state.articles.map((item, index) => {
                return <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                  <NewsItem
                    title={item.title}
                    pic={item.urlToImage}
                    source={item.source.name}
                    date={item.publishedAt}
                    description={item.description}
                    url={item.url}
                  />
                </div>
              })
            }
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}
