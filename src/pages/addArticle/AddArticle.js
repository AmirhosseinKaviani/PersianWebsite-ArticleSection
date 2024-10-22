import React, { useState } from 'react'
import MyNavbar from "../../components/navbar/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import axios from 'axios';

const AddArticle = () => {

 const [formData, setFormData] = useState({})

  const formHandler = (e, propertyName)=>{
    setFormData({...formData,[propertyName]: e.target.value})
  }

const addArticleHandler=()=>{
  axios.post("http://localhost:5000/articles", formData)
}
  return (
    <>
    <MyNavbar />
    <div className="formContainer">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>عنوان مقاله</Form.Label>
          <Form.Control type="text" onChange={(e)=>formHandler(e,'title')} placeholder="عنوان مقاله را وارد کنید" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>توضیح کوتاه</Form.Label>
          <Form.Control type="text" onChange={(e)=>formHandler(e,'desc')} placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>نویسنده مقاله</Form.Label>
          <Form.Control type="text" onChange={(e)=>formHandler(e,'writter')} placeholder="نام نویسنده مقاله را وارد کنید" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>موضوع مقاله</Form.Label>
          <Form.Control type="text" onChange={(e)=>formHandler(e,'category')} placeholder="موضوع مقاله را وارد کنید" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>عکس مقاله</Form.Label>
          <Form.Control type="text" onChange={(e)=>formHandler(e,'image')} placeholder="عکس مقاله را وارد کنید" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>مدت زمان خواندن</Form.Label>
          <Form.Control type="number" onChange={(e)=>formHandler(e,'readingTime')} placeholder="" />
        </Form.Group>
        
        <Button onClick={addArticleHandler} variant="primary" type="button">
          ساخت مقاله
        </Button>
      </Form>
    </div>
  </>
  )
}

export default AddArticle
