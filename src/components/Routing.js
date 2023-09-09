import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import Homepage from './Homepage/Homepage'
import Login from './Auth/Login/Login'
import Register from './Auth/Register/Register'
import Food from './Product/Product'
import ProductDetail from './ProductDetails/ProductDetail'
import Notfound from './Notfound/Notfound'
import Dashboard from './Dashboard/Dashboard'

const Routing = () => {
  return (
    <div>
       <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/product" element={<Food/>}/>
          <Route exact path="/productdetails/:id" element={<ProductDetail/>}/>
          <Route exact path="dashboard/*" element={<Dashboard/>} />
          <Route path="/*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
