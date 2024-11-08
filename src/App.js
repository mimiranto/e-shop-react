import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './components/add';
import UpdateArticle from './components/update';

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
        <Route path="/update-article/:idArticle" element={<UpdateArticle />} />
      </Routes>
    </Router>
  );
};

export default App;