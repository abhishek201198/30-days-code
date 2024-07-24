import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Error from './Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const RouterExample = () => {
  return (
    //     <BrowserRouter>
    //     <NavBar/>
    //     <Routes>
    // <Route path='/' element={<Home/>}></Route>
    // <Route path='/contact' element={<Contact/>}></Route>
    // <Route path='/about' element={<About/>}></Route>
    // <Route path='/Login' element={<div>LogIn</div>}></Route>
    //     </Routes>
    //     </BrowserRouter>

    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/" element={<div>Home</div>}></Route> */}
      
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>

        
        <Route path="*" element={<Error/>}>    </Route>
        <Route path="/Login" element={<div>LOgin</div>}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default RouterExample
