import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home'
import About from './pages/about/About'
import AddArticle from './pages/addArticle/AddArticle'
import Article from "./pages/article/Article"
import EditArticle from "./pages/editArticle/EditArticle"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/addarticle' element={<AddArticle/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/article/:articleId' element={<Article/>}/>
      <Route path='/editarticle/:articleId' element={<EditArticle/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
