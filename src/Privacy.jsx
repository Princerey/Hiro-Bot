import React from 'react';
import './App.css';
import { logo } from './assets';
import { arrow } from './assets'
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
        <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-6 flex-row'>
        <img src={logo} alt='logo' className='w-32 object-contain' />
        <div className='flex-row flex gap-4 '>
        <button type='button' className='black_btn'>Register</button>
        <button type='button' className='black_btn'>Login</button>
        </div>
      </nav>
      <div className='mt-0 flex flex-col justify-center items-center '>
      <h1 className='head_text' style={{fontFamily:"Yanone Kaffeesatz",fontWeight:"400",color:"#3d3d3d"}}>
      Privacy Policy<br className='max-md:hidden' />
      </h1>
      <h2 className='desc relative' style={{fontFamily:"poppins"}}>
  We prioritize your privacy, and this Privacy Policy outlines how we handle your information. When you use our mental health chatbot, we may collect personal details like your name, email, and location with your explicit consent. Your privacy is our top priority, and we want you to feel secure using our mental health chatbot. Your conversations with the chatbot are not stored or shared, ensuring full privacy. Our chatbot is designed to respect your anonymity, and no personal details are retained. Rest assured, we do not sell, trade, or share your personal data with third parties for marketing purposes. Industry-standard security measures are in place to safeguard your information, and we may use cookies to enhance your browsing experience. This policy may be updated periodically, so please check the effective date for the latest version. If you have any questions, contact us at rohkumar0126@gmail.com. By using our chatbot, you consent to this Privacy Policy. Thank you for trusting Hiro for your mental health support.</h2>
      </div>
    </header>
        </div>
      </main>
      <div style={{
       fontFamily:"Yanone Kaffeesatz",
       fontSize:"24px",
        right: "98px",
        bottom: "126px",
        position: "absolute",
        filter: "contrast(0.4)"
      }}>Try Hiro now !!</div>
      <img src={arrow} alt='logo' className='w-32 object-contain' style={{
        transform: "rotate(195deg)",
        width: "54px",
        right: "64px",
        bottom: "79px",
        position: "absolute",
        filter: "contrast(0.4)"
      }} />
      <Link to='/' style={{
       fontFamily:"Yanone Kaffeesatz",
       fontSize:"20px",
        left: "30px",
        bottom: "20px",
        position: "absolute",
        filter: "contrast(0.4)"
      }}>Back to Home</Link>
    </>
  )
}

export default App