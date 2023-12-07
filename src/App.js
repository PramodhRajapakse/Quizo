import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./auth/AuthProvider";
import PrivateRoute, { AdminRoute } from "./auth/PrivateRoute";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CategoryScreen from './pages/CategoryScreen';
import DetailScreen from './pages/DetailScreen';
import QuestionScreen from './pages/QuestionScreen';
import AdminScreen from './pages/AdminScreen';

function App() {
  return (
    <AuthProvider >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index path="/" element={<Login />} />
            <Route path="signup" element={<Register />} />
            <Route element={<AdminRoute />}>
              <Route exact path="admin" element={<AdminScreen />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route exact path="categories" element={<CategoryScreen />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route exact path="details" element={<DetailScreen />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route exact path="questions" element={<QuestionScreen />} />
            </Route>
          </Route >
        </Routes >
        <Footer />
      </Router >
    </AuthProvider>
  );
}

export default App;