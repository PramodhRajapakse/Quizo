import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;