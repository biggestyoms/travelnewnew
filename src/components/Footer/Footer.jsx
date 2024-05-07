import React, {useEffect}from 'react'
import './footer.css'
import video from '../../Assets/video-two.mp4'
import { FiChevronRight,FiSend } from 'react-icons/fi'
import {FaFacebook} from 'react-icons/fa'
import { FaPlaneDeparture} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BiLogoGmail } from 'react-icons/bi'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
      },[])

  return (
   <section className='footer'>
    <div data-aos="fade-up" className="videoDiv">
      <video src={video} loop autoPlay muted type="video/mp4"></video>
    </div>

    <div data-aos="fade-up" className="secContent container">
      <div className="contactDiv flex">
        <div data-aos="fade-up" className="text">
          <small>KEEP IN TOUCH</small>
          <h2>Travel With Us</h2>
        </div>

        <div data-aos="fade-up" className="inputDiv">
          <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
          <button data-aos="fade-up" className='btn flex' type='submit'>
            SEND <FiSend className='icon'/>
          </button>
        </div>
      </div>

     <div data-aos="fade-up" className="footerCard flex">
      <div data-aos="fade-up" className="footerIntro flex">
        <div className="logoDiv">
        <a href="#" data-aos="fade-up" className='logo flex'>
            <FaPlaneDeparture className='icon'/> MidotEasy.
          </a>
        </div>

        <div data-aos="fade-up" className="footerParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tenetur nulla iste reprehenderit perspiciatis esse sunt, voluptate maxime, alias aspernatur consectetur possimus repellendus! Perspiciatis, quaerat repellendus? Adipisci, veniam quod! Ratione.
        </div>

        <div className="footerSocial">
        <a href="https://www.facebook.com" data-aos="fade-up"><FaFacebook className='icon'/></a>
         <a href="#" data-aos="fade-up"><RiInstagramFill className='icon'/></a>
         <a href="#"data-aos="fade-up" ><IoLogoWhatsapp className='icon'/></a>
         <a href="#" data-aos="fade-up"><BiLogoGmail className='icon' /></a>
        </div>
      </div>

      <div data-aos="fade-up" className="footerLinks grid">

        {/* GROUP ONE */}
<div data-aos="fade-up" className="linkGroup">
  <span data-aos="fade-up" className='groupTitle'>
    OUR AGENCY
  </span>

  <li data-aos="fade-up" className='footerList flex'>
    <FiChevronRight className='icon'/>
Services
  </li>

  <li data-aos="fade-up" className='footerList flex'>
    <FiChevronRight className='icon'/>
Agency
  </li>

  <li data-aos="fade-up"className='footerList flex'>
    <FiChevronRight className='icon'/>
Tourism
  </li>

  <li data-aos="fade-up" className='footerList flex'>
    <FiChevronRight className='icon'/>
Payment
  </li>
</div>
{/* GROUP TWO */}
<div data-aos="fade-up" className="linkGroup">
  <span data-aos="fade-up" className='groupTitle'>
    APPLY FOR VISA
  </span>

  <li data-aos="fade-up" className='footerList flex'>
    <FiChevronRight className='icon'/>
Study visa
  </li>

  <li data-aos="fade-up" className='footerList flex'>
    <FiChevronRight className='icon'/>
Work Visa
  </li>

  <li data-aos="fade-up" className='footerList flex'>
    <FiChevronRight className='icon'/>
Tourist visa
  </li>
</div>
{/* GROUP 3 */}

<div data-aos="fade-up" className="linkGroup">
  <span data-aos="fade-up" className='groupTitle'>
    LAST MINUTE
  </span>

  <li data-aos="fade-up" className='footerList flex'>
    <FiChevronRight className='icon'/>
Morocco
  </li>

  <li data-aos="fade-up" className='footerList flex'>
    <FiChevronRight className='icon'/>
Southafrica
  </li>

  <li data-aos="fade-up" className='footerList flex'>
    <FiChevronRight className='icon'/>
Kenya
  </li>

</div>

      </div>

      <div className="footerDiv flex">
      <small >MIDOT EASY TRAVEL AGENCY</small>
      <small>&copy; 2024 Oladimejiyomss. All rights reserved</small>
     </div>
     </div>

    
    </div>

   </section>
  )
}

export default Footer
