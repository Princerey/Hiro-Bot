import React from 'react';
import './App.css';
import { logo } from './assets';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack, Modal, Typography } from '@mui/material';
import { useEffect } from 'react';
import styles from "./styles/Login.module.css";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
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

  const history = useNavigate();
  useEffect(() => {
    // Check if access token is present in localStorage
    const accessToken = localStorage.getItem('user_hiro');

    if (accessToken) {
      // Redirect to the homepage with the access token
      history('/');
    }
  }, [history]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [emaillogin, setEmaillogin] = useState('');
  const [password, setPassword] = useState('');
  const [email1, setEmail1] = useState('');
  // const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(emaillogin);
      const response = await fetch('https://serenesage-ajgfh2cne6b2dsb0.z03.azurefd.net/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emaillogin, password }),
      });

      if (!response.ok) {
        setSnackbarMessage('Uh-oh! Wrong credentials, try again.');
        setSnackbarType('error');
        handleClick2();
        throw new Error('Login failed');
      }
      const { access_token } = await response.json();
      localStorage.setItem('user_hiro', access_token);
      setSnackbarMessage('Successfully logged in! Bot at your service. ✨');
      setSnackbarType('success')
      handleClick2();
      setTimeout(() => {
        history('/');
        window.location.reload();
      }, 1500);

      console.log('Login successful');
    } catch (error) {
      console.error('Error during login:', error.message);
      // Handle login error, e.g., display an error message to the user
    }
  };
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    console.log(`email=${encodeURIComponent(email1)}`);
    try {
      const response = await fetch('https://serenesage-ajgfh2cne6b2dsb0.z03.azurefd.net/login/reset/', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email1)}`,

      });
      if (response.status == 200) {
        // If email is registered, show success message or redirect

        setSnackbarMessage('Password reset link sent successfully.');
        setSnackbarType('success')
        handleClick2();

        // You can redirect or show a success message here
      } else {
        // If email is not registered, show an error message or redirect
        setSnackbarMessage("Email isn't registered with us proceed to register.");
        setSnackbarType('warning')
        handleClick2();
      }
    } catch (error) {
      setSnackbarMessage("Error during password reset.");
      setSnackbarType('error')
      handleClick2();
      console.error('Error during password reset:', error.message);
      // Handle password reset error, e.g., display an error message to the user
    }
  };
  const textFieldStyle = {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1e1e1e', // Set your custom border color
    }
    , fontFamily: "poppins", '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7421bf',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#7421bf',
    },
    '&:hover': {
      color: '#7421bf',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7421bf',
    },
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <Snackbar open={open2} autoHideDuration={4000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity={snackbarType} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-6 flex-row'>
              <img src={logo} alt='logo' className='w-28 object-contain' />
              <div className='flex-row flex gap-4 '>
                <a href='/register' className='black_btn'>
                  Register
                </a>

              </div>
            </nav>
            <div className='relative bottom-4 sm:bottom-0 mt-0 flex flex-col justify-center items-center '>
              <h1 className='head_text' style={{ fontFamily: "Yanone Kaffeesatz", fontWeight: "400", color: "#3d3d3d" }}>
                Login<br className='max-md:hidden' />
              </h1>
              <form onSubmit={handleLogin} className='w-[300px] sm:w-[500px]' style={{
                margin: "25px", padding: "20px",

                border: "1px solid rgba(255, 255, 255, 0.125)", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", alignItems: "center"
              }}>

                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  autoFocus
                  sx={
                    textFieldStyle    
                  }
                  className='mt-[20px]'
                  InputLabelProps={{ style: { color: "#3d3d3d", fontFamily: "poppins" } }}
                  InputProps={{ style: { color: "#3d3d3d", fontFamily: "poppins" } }}
                  value={emaillogin}
                  onChange={(e) => setEmaillogin(e.target.value)}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  sx={
                    textFieldStyle    
                  }
                  InputLabelProps={{ style: { color: "#3d3d3d", fontFamily: "poppins" } }}
                  InputProps={{ style: { color: "#3d3d3d", fontFamily: "poppins" } }}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  variant="contained"
                  className={styles.button30}
                  fullWidth
                  type='submit'
                  sx={{ marginTop: 2 }}
                >
                  Login
                </Button>
                <Typography
                  onClick={openModal}
                  fullWidth
                  sx={{ marginTop: 3, color: '#3d3d3d', cursor: "pointer" }}
                >
                  Forgot Password ?
                </Typography>

              </form>
              <GoogleLogin
                size='large'
                theme='outline'
                shape='pill'
                onSuccess={credentialResponse => {
                  localStorage.setItem('user_hiro', credentialResponse.clientId);
                  setSnackbarMessage('Successfully logged in! Bot at your service.');
                  setSnackbarType('success')
                  handleClick2();
                  setTimeout(() => {
                    history('/');
                    window.location.reload();
                  }, 1500);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                useOneTap
              />
              <Modal open={isModalOpen} onClose={closeModal}>
                <div style={{
                  outline: "none",
                  position: 'absolute',
                  top: '50%',

                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: '#fefefe',
                  boxShadow: 24,
                  padding: "30px",
                  borderRadius: '8px',
                  maxWidth: '400px',
                  width: '100%',
                }}>
                  <Typography variant="h6" sx={{ fontSize: "17px", fontFamily: "poppins", fontWeight: "400" }} gutterBottom>
                    Enter your registered email
                  </Typography>
                  <TextField
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#1e1e1e', // Set your custom border color
                      }
                    }}
                    InputLabelProps={{ style: { color: "#3d3d3d", fontFamily: "poppins" } }}
                    InputProps={{ style: { color: "#3d3d3d", fontFamily: "poppins" } }}
                    value={email1}
                    onChange={(e) => setEmail1(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    className={styles.button30}
                    onClick={handleForgotPassword}
                    sx={{ marginTop: 1 }}
                  >
                    Reset Password
                  </Button>
                </div>
              </Modal>
            </div>
          </header>
        </div>
      </main>

      <a href='/' className='md:left-24 sm:left-16 left-6' style={{
        fontFamily: "Yanone Kaffeesatz",
        fontSize: "20px",

        bottom: "20px",
        position: "absolute",
        filter: "contrast(0.4)"
      }}>Back to Home</a>
    </>
  )
}

export default Login