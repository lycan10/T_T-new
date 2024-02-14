import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initGA, logPageView } from "./constant/analytics"


initGA(); // Initialize Google Analytics

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

logPageView(); // Log initial page view

