import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layouts";

import './index.css';

import App from './App';
import ProductList from './components/ProductList';
import DetailProdInfo from './components/ProductList/DetailInfo';
import SearchPage from './components/SerchPage';
import AdminPage from './components/Admin';
import Login from './components/Admin/login';
import About from './components/About'

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
        <Route path='/search' element={<Layout child={<SearchPage/>}></Layout>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<Layout child={<About/>}></Layout>}/>
        <Route path='*' element={<Layout child={<div className='not_found'>404 not found</div>}></Layout>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()