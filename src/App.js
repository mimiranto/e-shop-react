import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './components/add';
import UpdateArticle from './components/update';
import Delete from './components/delete';
import Article from "./components/show";
import Varticle from "./components/show/varticle";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes pour pages principales */}
        <Route
          path="/add"
          element={
            <Add />
          }
        />
        <Route path="/update-article/:idArticle" 
        element={<UpdateArticle />} />
        <Route
          path="/delete/:idArticle"
          element={
            <Delete />
          }
        />
        <Route path="/article/" 
        element={<Article />} />
        <Route path="/article/varticle/:id" 
        element={
        <Varticle />} />
      </Routes>
    </Router>
  );
};

export default App;