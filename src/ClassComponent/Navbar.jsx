import React, { Component } from 'react'

import "../Assets/style.css"
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  constructor(){
    super()
    this.State={
      search:"None"
    }
  }
  getData(e){
    this.setState({search:e.target.value})
}
postData(e){
    e.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({search:"None"})
    document.getElementById("search").value=""
}
  render() {
    return (
<>
<nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">News App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/All">All</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Politics">Politics</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Others
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Crime">Crime</Link></li>
                  <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
                  <li><Link className="dropdown-item" to="/science">science</Link></li>
                  <li><Link className="dropdown-item" to="/Education">Education</Link></li>
                  <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/Covid-19">Covid-19</Link></li>
                  <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="/Cricket">Cricket</Link></li>
                  <li><Link className="dropdown-item" to="/T20WorldCup">T-20 World Cup</Link></li>
                  <li><Link className="dropdown-item" to="/Jokes">Jokes</Link></li>
                  <li><Link className="dropdown-item" to="/World">World</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </Link>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('hi')}>Hindi</button></li>
                  <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('en')}>English</button></li>
                  <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('ar')}>Arabic</button></li>
                  <li><button className="dropdown-item" onClick={()=>this.props.changeLanguage('es')}>Spanish</button></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Article Size
                </Link>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={()=>this.props.changePageSize(8)}>8</button></li>
                  <li><button className="dropdown-item" onClick={()=>this.props.changePageSize(12)}>12</button></li>
                  <li><button className="dropdown-item" onClick={()=>this.props.changePageSize(16)}>16</button></li>
                  <li><button className="dropdown-item" onClick={()=>this.props.changePageSize(20)}>20</button></li>
                  <li><button className="dropdown-item" onClick={()=>this.props.changePageSize(24)}>24</button></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={(e)=>this.postData(e)}>
              <input className="form-control me-2" id='search' type="search" name='search' onChange={(e)=>this.getData(e)} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light btn-h text-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
</>
    )
  }
}
