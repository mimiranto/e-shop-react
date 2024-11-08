import axios from 'axios';
import React, { useState } from 'react';
import Delete from '../delete';


function Add() {

  const [article, setArticle] = useState({
    "name": "Example Product",
    "category": "Electronics",
    "brand": "TechBrand",
    "price": 299.99,
    "content": "This is an example product description.",
    "stock": 150,
    "online": true,
    "picture": [
      {
        "img": "https://example.com/image.jpg",
        "img1": "https://example.com/image1.jpg",
        "img2": "https://example.com/image2.jpg",
        "img3": "https://example.com/image3.jpg",
        "img4": "https://example.com/image4.jpg"
      }
    ]
  })

  const handleAdd = async () => {
    const data = await axios.post('http://localhost:8000/api/article/add', article)
  }


  return (
    <div className='Add'>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Add
