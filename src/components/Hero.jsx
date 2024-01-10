import React from 'react';
import { logo } from '../assets';
import {gemini } from "../assets";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Hero = () => {
  const [open2, setOpen2] = React.useState(false);

  const handleClick2 = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };
  const isUserLoggedIn = localStorage.getItem('user_hiro');

  // Function to handle logout
  const handleLogout = () => {
    // Remove user_hiro from local storage
    handleClick2();
    setTimeout(()=>{
      localStorage.removeItem('user_hiro');
      window.location.reload();
    },1000)
    
    // You can also perform any other logout-related tasks if needed
  };
  return (
    <>
    <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>
        Successfully logged out. See you again soon !
        </Alert>
      </Snackbar>
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-5 sm:mb-10 pt-6 flex-row'>
        <img src={logo} alt='logo' className='w-[6.5rem] sm:w-28 object-contain' />
        <div className='flex-row flex gap-4 '>
        {isUserLoggedIn ? (
              <button className='black_btn' onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <a href='/register' className='black_btn'>
                  Register
                </a>
                <a href='/login' className='black_btn'>
                  Login
                </a>
              </>
            )}
        </div>
      </nav>
      <div className='mt-6 sm:mt-8 flex flex-col justify-center items-center '>
      <h1 className='head_text' style={{fontFamily:"Yanone Kaffeesatz",fontWeight:"400",color:"#3d3d3d"}}>
        With a promise of privacy <br className='max-md:hidden' />
        <div className='flex-col flex items-center justify-center w-full'><span className='orange_gradient ' style={{fontFamily:"poppins"}}>Powered By </span><img src={gemini} alt='gemini' className='w-[130px] sm:w-[160px] object-contain relative bottom-4 sm:bottom-5' style={{filter:"brightness(0.55)"}}></img></div>
      </h1>
      <h2 className='desc relative bottom-9 sm:bottom-7' style={{fontFamily:"poppins"}}>Experience a judgment-free space for mental well-being with our 24/7 chatbot—your supportive guide to a healthier mind, always by your side.</h2>
      <a href='https://chromewebstore.google.com/detail/hiro/knpfibiooenedakmpiifildkcikmnhha?hl=en-GB' target='blank'  className="button-86" role="button">Add chrome extension</a>
      </div>
    </header>
  
     </>
  )
}

export default Hero