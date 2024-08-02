import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/Admin/Deshbord/Deshbord';
import NoPage from './pages/Nopage/Nopage';
import MyState from './context/Data/myState';
import Signup from './pages/Registration/Signup';
import Login from './pages/Registration/Login';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import AddProduct from './pages/Admin/page/AddProduct';
import UpdateProduct from './pages/Admin/page/UpdateProduct';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={
          <ProtectedRoutes>
            <Order />
          </ProtectedRoutes>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={
          <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
        } />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addproduct" element={
          <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
        <Route path="/updateproduct" element={
          <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <ToastContainer/>
    </Router>
  </MyState>
  )
}

export default App


export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'nk@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  
  }
}