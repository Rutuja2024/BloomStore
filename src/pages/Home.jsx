
import React from 'react'
import Announcemnet from '../Components/Announcemnet'
import Categories from '../Components/Categories';
import  Navbar  from '../Components/Navbar'
import Slide from "../Components/Slide";
import Products from "../Components/Products";
import Newsletter from '../Components/Newsletter';
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Announcemnet/>
       <Navbar/>
       <Slide/>
       <Categories/>
       <Products/>
       <Newsletter/>
       <Footer/>
    </div>
  )
}

export default Home