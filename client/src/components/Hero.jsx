import React from "react";
import bgImg from '../assets/hero.png'

function Hero() {
  return (
    <div name='home' className='w-full h-90 bg-black flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-white text-2xl font-montserrat'>Introducing...</p>
                <h1 className='text-white py-3 text-7xl md:text-7xl mt-4 mb-4 font-bold font-rocksalt'>TRESS</h1>
                <p className='text-white text-2xl font-montserrat'>A Black hair haven connecting you with local hair professionals </p>
                <button className='py-3 px-6 sm:w-[60%] my-4 font-montserrat text-xl'>Post an ad</button>
                <button className='py-3 px-6 sm:w-[60%] my-4 font-montserrat text-xl'>Find a Stylist</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
         
        </div>
    </div>
  );
}

export default Hero;
