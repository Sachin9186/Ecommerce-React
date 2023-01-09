import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Abslider from './aboutslider/Abslider';
import './aboutslider/abslider.css';
import Absection from './Absection/Absection';
import './Absection/absection.css';
import Chef from './Chef/Chef';
import '../components/Chef/chef.css';


export default function About() {
  return (
    <>
    <Navbar/>
    <Abslider/>
    <Absection/>
    <Chef/>
    <Footer/>
    </>
  )
}
