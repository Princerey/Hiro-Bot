import React from 'react';
import { logo } from '../assets';
import {gemini } from "../assets";

const Hero = () => {
  return (
    <>
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-6 flex-row'>
        <img src={logo} alt='logo' className='w-32 object-contain' />
        <div className='flex-row flex gap-4 '>
        <button type='button' className='black_btn'>Register</button>
        <button type='button' className='black_btn'>Login</button>
        </div>
      </nav>
      <div className='mt-8 flex flex-col justify-center items-center '>
      <h1 className='head_text' style={{fontFamily:"Yanone Kaffeesatz",fontWeight:"400",color:"#3d3d3d"}}>
        With a promise of privacy <br className='max-md:hidden' />
        <div className='flex-col flex items-center justify-center w-full'><span className='orange_gradient ' style={{fontFamily:"poppins"}}>Powered By </span><img src={gemini} alt='gemini' className='w-[200px] object-contain relative bottom-7' style={{filter:"brightness(0.55)"}}></img></div>
      </h1>
      <h2 className='desc relative bottom-7' style={{fontFamily:"poppins"}}>Experience a judgment-free space for mental well-being with our 24/7 chatbot—your supportive guide to a healthier mind, always by your side.</h2>
      <button className="button-86" role="button">Add chrome extension</button>
      </div>
    </header>
  
     </>
  )
}

export default Hero