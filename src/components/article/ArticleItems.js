import React from 'react'
import Card from 'react-bootstrap/Card';
import {TiArrowLeftThick} from 'react-icons/ti'
import {BiTimeFive} from 'react-icons/bi'
import './ArticleItems.css'
import { Link } from 'react-router-dom';

const ArticleItems = ({id,image,title,desc,writter,category,readingTime}) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={image}
      />
      <Card.Body>
        <Card.Title className='py-2'>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Link to={`/article/${id}`}>
        <span className='read-more'>
            <span>ادامه مقاله</span>
            <TiArrowLeftThick size='25px' />
        </span>
        </Link>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between align-items-center py-3'>
        <span>نویسنده : {writter}</span>
        <span> <BiTimeFive /> {readingTime} دقیقه</span>
      </Card.Footer>
    </Card>
  )
}

export default ArticleItems
