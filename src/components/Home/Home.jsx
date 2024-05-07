import React, {useEffect}from 'react'
import './home.css'
import video from '../../Assets/video-one.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'


import Aos, { init} from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
Aos.init({duration:2000})
  },[])

  return (
 <section className='home'>
<div className="overlay">

</div>
<video src={video} muted autoPlay loop typeof='video/mp4'></video>

<div className="homeContent container">
  <div className="textDiv">
    <span data-aos="fade-up" className='smallText'>
      Our Packages
    </span>
    <h1 data-aos="fade-up" className='homeTitle'>
      Search your Holiday
    </h1>
  </div>
  <div data-aos="fade-up" className="cardDiv grid">

    <div className="destinationInput">
      <label htmlFor="city">Search your destination:</label>
      <div className="input flex">
        <input type="text" placeholder='Enter name here...' />
        <GrLocation className='icon'/>

      </div>
    </div>
    <div data-aos="fade-up"className="dateInput">
      <label htmlFor="date">Select your date:</label>
      <div className="input flex">
        <input type="date"/>
      </div>
    </div>
    

    <div data-aos="fade-up" className="priceInput">
     <div className="label_total flex">
      <label htmlFor="price">Max Price:</label>
      <h3 className='total'>$5000</h3>
     </div>
     <div className="input flex">
      <input type="range" max="5000" min="1000" />
     </div>
    </div>

    <div className="searchOption flex">
      <HiFilter className='icon'/>
      <span>More Filter</span>
    </div>


  </div>
  <div  className="homeFooterIcon flex">
        <div className="rightIcons">
         <a href="#"><FiFacebook className='icon'/></a>
         <a href="#"> <AiOutlineInstagram className='icon'/></a>
         <a href="#"><FaTripadvisor className='icon'/></a>
        </div>
        <div className="leftIcons">
        <a href="#"> <BsListTask className='icon'/></a>
         <a href="#"><TbApps className='icon' /></a>
        </div>

    </div>

  
</div>
 </section>
  )
}

export default Home
