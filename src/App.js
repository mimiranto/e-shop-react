import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './components/add';

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
      </Routes>
    </Router>
  );
};

export default App;