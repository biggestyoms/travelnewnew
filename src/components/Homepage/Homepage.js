import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

const homePage = () => {
  return (
    <section>
         <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
    </section>
  )
}

export default homePage
