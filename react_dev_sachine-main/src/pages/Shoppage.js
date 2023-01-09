import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Gridshoppage from '../components/Shoppage/Gridshoppage'
import '../components/Shoppage/Gridshoppage.css'

export default function Shoppage() {
  return (
    <>
    <Navbar/>
    <Gridshoppage/>
    <Footer/>
    </>
  )
}
