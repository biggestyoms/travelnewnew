import React, {useEffect} from 'react'
import './News.css'
import news_image from '../../Assets/news_image_1.jpg'
import vaca from '../../Assets/vaca.jpg'
import destinationwedding from '../../Assets/destinationwedding.jpg'
import work from '../../Assets/work.jpg'
import study from '../../Assets/study.jpg'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'


import Aos, { init } from 'aos'
import 'aos/dist/aos.css'
const News = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <div className='news'>
      <div className='n_top'>
        <div className='n_image'>
        <img className='news_image' src={news_image} alt='news_image' />
        </div>
        <div className='n_info'>
          <h1 data-aos="fade-left">Travels Style</h1>
          <p data-aos="fade-right" >There are many ways to journey let us help you find a perfect fit 😊</p>
        </div>
      </div>

      <div className='n_center'>
       <div className='n_center_header'>
       <h1 data-aos="slide-left">Experiences</h1>
        <p data-aos="slide-right" >Tell Us Your Travel Style</p>
       </div>
        <div className='n_center_info grid'>
         <div className='n_center_info_1'>
         <img data-aos="slide-left" className='news_image_1' src={vaca} alt='news_image'/>
         <h2 data-aos="fade-up">Vacation</h2>
         </div>
         <div className='n_center_info_1'>
         <img data-aos="slide-right" className='news_image_1' src={study} alt='news_image'/>
         <h2 data-aos="fade-up" >Education</h2>
         </div>
         <div className='n_center_info_1'>
         <img data-aos="slide-left" className='news_image_1' src={work} alt='news_image'/>
         <h2 data-aos="fade-up">Work</h2>
         </div>
         <div className='n_center_info_1'>
         <img data-aos="slide-right" className='news_image_1' src={destinationwedding} alt='news_image'/>
       <h2 data-aos="fade-up">Destination Wedding</h2>
         </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default News
