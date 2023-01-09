import React from 'react'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Iconbox from '../components/Iconbox';
import Category from '../components/Category/Category';
import Footer from '../components/Footer';
import Blog from '../components/blog/Blog';
import '../components/menu/menu.css';
import '../components/blog/blog.css';
import Menu from '../components/menu/Menu';
import Tab from '../components/tabs/Tab';
import '../components/tabs/tab.css';
import '../components/Hpabsection/Hpabsection.css';
import Producthp from '../components/producthp/Producthp';
import '../components/producthp/producthp.css';
import Hpcategory from '../components/Hp_Category/Hpcategory';
import '../components/Category/category.css';




export default function Main() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Producthp/>
    <Category/>
    <Tab/>
    <Iconbox/>
    <Blog/>
    <Footer/>
    </>
  )
}
