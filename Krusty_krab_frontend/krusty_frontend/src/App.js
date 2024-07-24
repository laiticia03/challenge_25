import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import RecipesPage from './RecipesPage'; // Ensure this component is created and imported

const App = () => {
  const [token, setToken] = useState('');

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      setToken(response.data.token);
      return true;
    } catch (error) {
      console.error('There was an error logging in!', error);
      return false;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/recipes" element={token ? <RecipesPage token={token} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;