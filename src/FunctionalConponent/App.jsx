import React, { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
export default function App() {
  let [pageSize,setpageSize] = useState(8)
  let [language,setlanguage] = useState("hi")
  let [search,setsearch] = useState("None")
  const changeLanguage = (data)=>{
    setlanguage(data)
  }
  const changePageSize = (data)=>{
    setpageSize(data)
  }
  const changeSearch = (data)=>{
    setsearch(data)
  }
    return (
      <>
        <BrowserRouter>
          <Navbar changeSearch={changeSearch} changeLanguage={changeLanguage} changePageSize={changePageSize}/>
            <Routes>
              <Route path='/' element={<Home pageSize={pageSize} search={search} language={language} q="All" />}></Route>
              <Route path='/All' element={<Home pageSize={pageSize} search={search} language={language} q="All" />}></Route>
              <Route path='/Politics' element={<Home pageSize={pageSize} search={search} language={language} q="Politics" />}></Route>
              <Route path='/Crime' element={<Home pageSize={pageSize} search={search} language={language} q="Crime" />}></Route>
              <Route path='/Technology' element={<Home pageSize={pageSize} search={search} language={language} q="Technology" />}></Route>
              <Route path='/Science' element={<Home pageSize={pageSize} search={search} language={language} q="Science" />}></Route>
              <Route path='/Education' element={<Home pageSize={pageSize} search={search} language={language} q="Education" />}></Route>
              <Route path='/Entertainment' element={<Home pageSize={pageSize} search={search} language={language} q="Entertainment" />}></Route>
              <Route path='/Covid-19' element={<Home pageSize={pageSize} search={search} language={language} q="Covid-19" />}></Route>
              <Route path='/Sports' element={<Home pageSize={pageSize} search={search} language={language} q="Sports" />}></Route>
              <Route path='/Cricket' element={<Home pageSize={pageSize} search={search} language={language} q="Cricket" />}></Route>
              <Route path='/T20WorldCup' element={<Home pageSize={pageSize} search={search} language={language} q="T20WorldCup" />}></Route>
              <Route path='/Jokes' element={<Home pageSize={pageSize} search={search} language={language} q="Jokes" />}></Route>
              <Route path='/World' element={<Home pageSize={pageSize} search={search} language={language} q="World" />}></Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
      </>
    )
  }

