import React, { useContext }from 'react'
import Layout from '../../components/Layout/Layout'
import myContext from '../../context/Data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/Filter/Filter'
import ProductCard from '../../components/ProductCard/ProductCard'
import Testimonial from '../../components/Testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'


function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <Layout>
    {/* <div className="flex gap-5 justify-center">
      <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
      <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
    </div> */}
    <HeroSection />
    <Filter />
    <ProductCard />
    {/* <Track /> */}
    <Testimonial />

  </Layout>
  )
}


export default Home
