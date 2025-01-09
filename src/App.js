import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CategoryScreen from './pages/CategoryScreen';
import DetailScreen from './pages/DetailScreen';
import QuestionScreen from './pages/QuestionScreen';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route>
              <Route index exact path="categories" element={<CategoryScreen />} />
            </Route>
            <Route>
              <Route exact path="details" element={<DetailScreen />} />
            </Route>
            <Route>
              <Route exact path="questions" element={<QuestionScreen />} />
            </Route>
          </Route >
        </Routes >
        <Footer />
      </Router >
  );
}

export default App;