import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Contactslider from './Contactslider/Contactslider';
import './Contactslider/contactslider.css'
import Contactform from './Cotactform/Contactform';
import './Cotactform/contactform.css';

import './Absection/absection.css';

export default function Contact() {
  return (
    <>
    <Navbar/>
    <Contactslider/>
    <Contactform/>
    <Footer/>
    </>
  )
}
