import React from 'react'
import { BrowserRouter as Router,Route,Routes,Switch,RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Packages from './components/Packages/Packages'
import News from './components/News/News'





const App = () => {
  return (

<Router>
  <Navbar/>
  
  <Routes>
  
   
   <Route path='/' element={<Homepage/>} exact />
    <Route path='/Packages' element={<Packages/>}/>
    <Route path='/News' element={<News/>} />
   
  
  </Routes>
 
</Router>

  )
}

export default App
