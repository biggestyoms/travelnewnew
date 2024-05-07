import React,{useEffect} from 'react'
import './main.css'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'


const Data = [


  {
    id: 1,
    imgSrc: img1,
    destTitle: 'High-rise Skyscraper Buildings',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$2000',
    description: 'Australia is a popular tourist destination known for its stunning natural beauty, world-class beaches, vibrant cities, and unique wildlife. Major tourist attractions include the Sydney Opera House, Uluru (Ayers Rock), the Great Barrier Reef, the Great Ocean Road, and the Daintree Rainforest.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Site seeing',
    location: 'peru',
    grade: 'CULTURAL RELAX',
    fees:'$2000+',
    description:'Australia is a popular tourist destination known for its stunning natural beauty, world-class beaches, vibrant cities, and unique wildlife. Major tourist attractions include the Sydney Opera House, Uluru (Ayers Rock), the Great Barrier Reef, the Great Ocean Road, and the Daintree Rainforest.'
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'High-rise Skyscraper Buildings',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees:'$2000+',
    description:'Australia is a popular tourist destination known for its stunning natural beauty, world-class beaches, vibrant cities, and unique wildlife. Major tourist attractions include the Sydney Opera House, Uluru (Ayers Rock), the Great Barrier Reef, the Great Ocean Road, and the Daintree Rainforest.'
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'High-rise Skyscraper Buildings',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees:'$2000+',
    description:'Australia is a popular tourist destination known for its stunning natural beauty, world-class beaches, vibrant cities, and unique wildlife. Major tourist attractions include the Sydney Opera House, Uluru (Ayers Rock), the Great Barrier Reef, the Great Ocean Road, and the Daintree Rainforest.'
  },
  {
    id:5,
    imgSrc: img5,
    destTitle: 'High-rise Skyscraper Buildings',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees:'$2000+',
    description:'Australia is a popular tourist destination known for its stunning natural beauty, world-class beaches, vibrant cities, and unique wildlife. Major tourist attractions include the Sydney Opera House, Uluru (Ayers Rock), the Great Barrier Reef, the Great Ocean Road, and the Daintree Rainforest.'
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'High-rise Skyscraper Buildings',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees:'$2000+',
    description:'Australia is a popular tourist destination known for its stunning natural beauty, world-class beaches, vibrant cities, and unique wildlife. Major tourist attractions include the Sydney Opera House, Uluru (Ayers Rock), the Great Barrier Reef, the Great Ocean Road, and the Daintree Rainforest.'
  },
  {
    id:7,
    imgSrc: img7,
    destTitle: 'High-rise Skyscraper Buildings',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees:'$2000+',
    description:'Australia is a popular tourist destination known for its stunning natural beauty, world-class beaches, vibrant cities, and unique wildlife. Major tourist attractions include the Sydney Opera House, Uluru (Ayers Rock), the Great Barrier Reef, the Great Ocean Road, and the Daintree Rainforest.'
  },
  {
    id:8,
    imgSrc: img8,
    destTitle: 'High-rise Skyscraper Buildings',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees:'$2000+',
    description:'Australia is a popular tourist destination known for its stunning natural beauty, world-class beaches, vibrant cities, and unique wildlife. Major tourist attractions include the Sydney Opera House, Uluru (Ayers Rock), the Great Barrier Reef, the Great Ocean Road, and the Daintree Rainforest.'
  },
  {
    id:9,
    imgSrc: img9,
    destTitle: 'High-rise Skyscraper Buildings',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees:'$2000+',
    description:'Australia is a popular tourist destination known for its stunning natural beauty, world-class beaches, vibrant cities, and unique wildlife. Major tourist attractions include the Sydney Opera House, Uluru (Ayers Rock), the Great Barrier Reef, the Great Ocean Road, and the Daintree Rainforest.'
  },
]
const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
      },[])
  return (
    <section className='main container section'>
      <div data-aos="fade-right" className="secTitle">
        <h3 className="title">
          Most Visited Destinations
        </h3>
      </div>


      <div data-aos="fade-up" className="secContent grid">

        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description,
          }) => {
            return (
              <div key={id} className="singleDestination">

                <div data-aos="fade-up" className="imageDiv">
                  <img src={imgSrc} alt= {destTitle}/>
                </div>
                <div data-aos="fade-up" className="cardInfo">
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span data-aos="fade-up" className='continent flex'>
                    <HiOutlineLocationMarker className='icon'/>
                    <span data-aos="fade-up" className="name">
                      {location}
                    </span>
                  </span>

                  <div data-aos="fade-up" className="fees flex">
                    <div data-aos="fade-up" className="grade">
                      <span data-aos="fade-up">
                        {grade} <small>+1</small>
                      </span>
                    </div>
                    <div data-aos="fade-up" className="price">
                      <h5> {fees} </h5>
                    </div>

                  </div>

                  <div data-aos="fade-up" className="desc">
                    <p> {description} </p>
                  </div>

                  <button data-aos="fade-up" className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon' />
                  </button>
                </div>
            

                
              </div>

            )
          })
        }

      </div>

    </section>
  )
}

export default Main
