import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddProductForm from './AddProductForm'
import ProductList from './ProductList'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import CartList from './features/cart/CartList'
import { Register } from './features/user/Register'
import { Login } from './features/user/Login'
import Checkout from './features/cart/Checkout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { userIn } from './features/user/userslice'
import { startCart } from './features/cart/cartSlice'

function App() {
  let dispath = useDispatch();
  useEffect(() => {
    let u = localStorage.getItem("currentUser");
    if (u) {
      let user = JSON.parse(u);
      dispath(userIn(user));
    }
    let c = localStorage.getItem("cart");
    if (c) {
      
      dispath(startCart(JSON.parse(c)))
    }
  }, []);

  return (
    <>
      {/* <UpdateProd/> */}
      {/* <ProductList/>
      <AddProductForm/> */}
      <NavBar />
      <Routes>
        <Route path='add' element={<AddProductForm />} />
        <Route path='list' element={<ProductList />} />
        <Route path='cart' element={<CartList />} />
        <Route path='reg' element={<Register />} />
        <Route path='log' element={<Login />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='' element={<ProductList />} />
      </Routes>
    </>
  )
}

export default App
