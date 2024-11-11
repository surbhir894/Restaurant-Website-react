import React, {  useState , useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import WhyChoose from './components/WhyChoose/WhyChoose'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showPopup ,setShowPopup]=
useState(false);
  const HandlePopup =()=>{
    setShowPopup(true);
  }
useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay :100,
    })
    AOS.refresh();
  },[]);
  return (
    <div className='overflow-x-hidden'>
       <Navbar HandlePopup ={HandlePopup}/>
       <Hero/>
       <Banner/>
       <WhyChoose/>
       <About HandlePopup ={HandlePopup}/>
       <Banner/>
       <Footer/>
       {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />}
    </div>
  )
}

export default App