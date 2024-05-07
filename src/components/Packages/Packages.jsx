import React, { useEffect } from 'react'
import './Packages.css'
import Footer from '../Footer/Footer'
import { FaPaperPlane } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import slide_image_1 from '../../Assets/image-slider-1.jpg'
import slide_image_2 from '../../Assets/image-slider-2.jpg'
import slide_image_3 from '../../Assets/image-slider-3.jpg'
import slide_image_4 from '../../Assets/image-slider-4.jpg'
import slide_image_5 from '../../Assets/image-slider-5.jpg'
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'
import { FiSend } from 'react-icons/fi';




const Packages = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='packages'>
      <div className='packages-top'>
        <div className='packages-content flex'>
          <div data-aos="fade-up" className='packages-one'>
            <FaPaperPlane className='icon' /> <small>Personalized Experience</small>
          </div>
          <div data-aos="fade-up" className='packages-two'>
            <a href="tel:+2348136900471">+2348136900471</a>
          </div>

        </div>
      </div>

      <div className='packages-center'>
        <div data-aos="fade-up" className='slider'>
          <div  data-aos="fade-up" className='packages-info'>
          <h1  data-aos="fade-up" >ALL-INCLUSIVE PACKAGES</h1>
          <p  data-aos="fade-up" >Embarking on a sun-soaked retreat with an All-Inclusive vacation is a breeze! Whether you're envisioning a family escape to a kid-friendly resort, a romantic celebration, or a week of pure relaxation, our advisors are ready to assist you! 

          Curious about the options for your travel dates? Reach out to us and kickstart your vacation planning today!</p>
          </div>
          <Swiper
            effect={'coverflow'}
            grabCursor={'true'}
            centeredSlides={'true'}
            loop={'true'}
            slidesPerView={'auto'}
            coverflowEffect={
              {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }
            }
            modules={[EffectCoverflow, Autoplay]}
            className='slider-container'
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <img className='image-slider' src={slide_image_1} alt='slide_image' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='image-slider' src={slide_image_2} alt='slide_image' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='image-slider' src={slide_image_3} alt='slide_image' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='image-slider' src={slide_image_4} alt='slide_image' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='image-slider' src={slide_image_5} alt='slide_image' />
            </SwiperSlide>
          </Swiper>



        </div>

      </div>

      <div className='packages-main container'>

        <div data-aos="fade-up" className="inputPackages">
          <div className='pmc-header'>
            EXPLORE YOUR AMAZING OFFER TODAY
          </div>
          <div className='inputPackage container'>
            <input data-aos="fade-up" type="text" placeholder='First Name:' />
            <input data-aos="fade-up" type="text" placeholder='Last Name:' />
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address:' />
            <input data-aos="fade-up" type="number" placeholder='Phone Number:' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND ME MORE DETAILS <FiSend className='icon' />
            </button>
          </div>
        </div>


      </div>


<Footer/>
    </div>
  )
}

export default Packages
