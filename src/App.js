import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CategoryScreen from './pages/CategoryScreen';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path='categories' element={<CategoryScreen />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;