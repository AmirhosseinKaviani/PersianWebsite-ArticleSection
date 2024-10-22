import React, { useEffect, useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import { Container, Row, Col } from 'react-bootstrap'
import ArticleItems from "../../components/article/ArticleItems"
import axios from 'axios';

const Home = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/articles')
    .then(response => setArticles(response.data))
  },[])
  return (
    <div>
      <Navbar/>
      <Container>
        <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4'>
          {articles.map(article => (
            <Col key={article.id}><ArticleItems {...article}/></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home
