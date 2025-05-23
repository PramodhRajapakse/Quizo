import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import theme from "../src/assets/styles/theme";

// Apply theme colors as CSS variables
document.documentElement.style.setProperty("--light", theme.light);
document.documentElement.style.setProperty("--dark", theme.dark);
document.documentElement.style.setProperty("--navy", theme.navy);
document.documentElement.style.setProperty("--gray", theme.gray);
document.documentElement.style.setProperty("--secondary", theme.secondary);
document.documentElement.style.setProperty("--success", theme.success);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
