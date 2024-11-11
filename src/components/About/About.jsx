import React from 'react'
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";
import { FaUser } from 'react-icons/fa';


const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    width:"100%",
    height:"100%",
    position:"relative",
};

function About({HandlePopup}) {
  return (
   <>
   <div style={bgStyle} className='py-14'>
    <div className='container min-h-[500px] relative z-10'>
        <h1 data-aos="fade"
        className='pt-20 tracking-wider text-4xl
        font-semibold text-white text-center'>
            About Us 
        </h1>
        {/* card section  */}
        <div data-aos="fade-up" data-aos-delay="300"
         className='bg-white/80 p-10 my-10'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque odio assumenda aut reiciendis sunt quidem. Consectetur, ducimus. Inventore exercitationem vitae rem dolores! Hic nesciunt odio quidem quasi vitae, obcaecati voluptates! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus alias cupiditate temporibus consequatur, cumque harum unde at rem magnam debitis doloremque molestiae voluptatum error distinctio tempore exercitationem! Nulla, optio temporibus?
            distinctio tempore exercitationem! Nulla,
            <div className='pt-10 flex justify-center'>
                <button onClick={HandlePopup}
                 className='flex justify-center
                items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
                    <FaUser/>
                    MyAccount
                </button>
            </div>
         </div>
    </div>
           {/* wave vector  */}
           <div className='absolute top-0 right-0 w-full'>
           <img src={Vector} alt="" className='mx-auto'  />
           </div>
         
   </div>
   </>
  )
}

export default About