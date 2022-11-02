import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home(props) {
  let [articles, setarticles] = useState([])
  let [totalResults, settotalResults] = useState(0)
  let [page, setpage] = useState(1)
  async function getAPIData() {
    try {
      setpage(1)
      let response = ""
      if (props.search === "None")
        response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=${props.pageSize}&language=${props.language}&page=${page}&apiKey=f727a53de0e94847bc237558f7cb2be5`)
      else
        response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&pageSize=${props.pageSize}&language=${props.language}&page=${page}&apiKey=f727a53de0e94847bc237558f7cb2be5`)
      let result = await response.json()
      setarticles(result.articles)
      settotalResults(result.totalResults)
    }
    catch (error) {
      alert("Something Went Wrong")
    }
  }
  const fetchData = async () => {
    setpage(page+1)
    let response = ""
    if (props.search === "None")
      response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&pageSize=${props.pageSize}&language=${props.language}&page=${page}&apiKey=f727a53de0e94847bc237558f7cb2be5`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&pageSize=${props.pageSize}&language=${props.language}&page=${page}&apiKey=f727a53de0e94847bc237558f7cb2be5`)
    let result = await response.json()
    setarticles(articles.concat(result.articles))
  }
  useEffect(()=>{
    getAPIData()
  },[props])
  return (
    <div className="container-fluid">
      <h5 className='background text-light text-center p-2 mt-2'>{props.q} News Section</h5>
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={<h5 className=' py-2 text-center'><div className="spinner-border text-he " role="status">
          <span className="visually-hidden">Loading...</span>
        </div></h5>}>
        <div className="row">
          {
            articles.map((item, index) => {
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

