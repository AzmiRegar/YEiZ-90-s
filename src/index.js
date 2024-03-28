import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Tshirt from './pages/T-shirt';
import Outerwear from './pages/Outerwear';
import Pants from './pages/Pants';
import Accecories from './pages/Accecories';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Tshirt" element={<Tshirt />} />
          <Route path="outerwear" element={<Outerwear />} />
          <Route path="pants" element={<Pants />} />
          <Route path="accecories" element={<Accecories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
