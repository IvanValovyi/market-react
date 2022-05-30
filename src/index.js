import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layouts";

import './index.css';

import App from './App';
import ProductList from './components/ProductList';
import DetailProdInfo from './components/ProductList/DetailInfo';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout child={<App/>}></Layout>}/>
        <Route path='/shop' element={<Layout child={<ProductList/>}></Layout>}>
          <Route path=':productId' element={<DetailProdInfo/>}></Route>
        </Route>
        <Route path='*' element={<Layout child={<div className='not_found'>404 not found</div>}></Layout>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()