import React, {useState} from 'react'
import './navbar.css'
import {FaPlaneDeparture} from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { Link } from 'react-router-dom'



const Navbar = () => {

    const [active, setActive] = useState('navBar')
     const  showNav = () =>{
        setActive ('navBar activeNavbar')
     }
     const removeNav = () =>{
        setActive ('navBar')
     }


  return (
   <section className='navBarSection'>
<header className='header flex'>
    <div className='logoDiv'>
        <a href="#" className='logo flex'>
            <h1><FaPlaneDeparture className='icon'/>MidotEasy.</h1>
        </a>
    </div>

    <div className={active}>
        <ul className='navLists flex'>

            <li className='navItem'> 
             <Link to="/" className='navLink'>HOME</Link>
            </li>

            <li className='navItem'> 
             <Link to="/Packages" className='navLink'>PACKAGES</Link>
            </li>

            <li className='navItem'> 
             <a href="/About" className='navLink'>ABOUT</a>
            </li>

            <li className='navItem'> 
             <a href="/News" className='navLink'>NEWS</a>
            </li>

            <li className='navItem'> 
             <a href="/Contact" className='navLink'>CONTACT</a>
            </li>

            <button className='btn'>
                <a href="#">BOOK NOW</a>
            </button>
        </ul>

        <div onClick={removeNav} className='closeNavbar'>
        <AiFillCloseCircle className='icon' />
        </div>
    </div>

    <div onClick={showNav}className="toggleNavbar">
    <TbGridDots className='icon'/>
    </div>

</header>
   </section>
  )
}

export default Navbar
