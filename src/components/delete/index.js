import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { response } from 'express';

function UpdateArticle() {
  const { idArticle } = useParams(); 

  const handleDelete = async (indexTask) => {
    try {
        const response = await axios.delete(`http://localhost:8000/api/article/delete/${idArticle}`);
        console.log(response.status)
    } catch (error) {
        console.log(response.status)
    }
  }
  return (
    <div>
      <h2>Mettre à jour l'article</h2>
      <div >
          <p>
              {idArticle}
            </p>
          <img 
            src='https://cdn-icons-png.flaticon.com/512/6724/6724777.png' 
            width={20}
            alt='corbeille'
            onClick={() => handleDelete(idArticle)}
          />
        </div>
      
    </div>
  );
}

export default UpdateArticle;
