import React, { Component } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
export default class App extends Component {
  constructor(){
    super()
    this.state ={
      pageSize :8,
      language :"hi",
      search : "None"
    }
  }
  changeLanguage = (data)=>{
    this.setState({language:data})
  }
  changePageSize = (data)=>{
    this.setState({pageSize:data})
  }
  changeSearch = (data)=>{
    this.setState({search:data})
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar changeSearch={this.changeSearch} changeLanguage={this.changeLanguage} changePageSize={this.changePageSize}/>
            <Routes>
              <Route path='/' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="All" />}></Route>
              <Route path='/All' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="All" />}></Route>
              <Route path='/Politics' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="Politics" />}></Route>
              <Route path='/Crime' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="Crime" />}></Route>
              <Route path='/Technology' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="Technology" />}></Route>
              <Route path='/Science' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="Science" />}></Route>
              <Route path='/Education' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="Education" />}></Route>
              <Route path='/Entertainment' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="Entertainment" />}></Route>
              <Route path='/Covid-19' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="Covid-19" />}></Route>
              <Route path='/Sports' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="Sports" />}></Route>
              <Route path='/Cricket' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="Cricket" />}></Route>
              <Route path='/T20WorldCup' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="T20WorldCup" />}></Route>
              <Route path='/Jokes' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="Jokes" />}></Route>
              <Route path='/World' element={<Home pageSize={this.state.pageSize} search={this.state.search} language={this.state.language} q="World" />}></Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
      </>
    )
  }
}

