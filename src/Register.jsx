import React from 'react';
import './App.css';
import { logo } from './assets';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack, Modal, Typography } from '@mui/material';
import { useEffect } from 'react';
import styles from "./styles/Login.module.css"
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
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
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');
  const history = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setSnackbarMessage("Oops! 🤦‍♂️ Passwords don't match. Please double-check and try again.");
      setSnackbarType('error');
      handleClick2();
      return;
    }
    if (formData.password.length < 8) {
      setSnackbarMessage('Password must be at least 8 characters long.');
      setSnackbarType('error');
      handleClick2();
      return;
    }

    try {
      // const formData = new FormData();
      // formData.append("prompt", message);
      const response = await fetch('https://serenesage-ajgfh2cne6b2dsb0.z03.azurefd.net/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setSnackbarMessage("Oops! 🙈 Email already in use. Try a different one!");
        setSnackbarType('error');
        handleClick2();
        throw new Error(errorData.detail || 'Failed to create user');
      }
      setSnackbarMessage("Hooray! 🎉 You're officially a part of Hiro's happy community!")
      setSnackbarType('success');
      handleClick2();
      setTimeout(() => {
        history('/login');
      }, 1500)

    } catch (error) {
      setSnackbarMessage("Oops! 😅 Something went wrong on our end. Please try again later.");
      setSnackbarType('error');
      handleClick2();
      console.error('Error creating user:', error.message);
    }
  };
  useEffect(() => {
    // Check if access token is present in localStorage
    const accessToken = localStorage.getItem('user_hiro');

    if (accessToken) {
      // Redirect to the homepage with the access token
      history('/');
    }
  }, [history]);

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
                <a href='/login' className='black_btn'>Login</a>
              </div>
            </nav>
            <div className='relative bottom-4 sm:bottom-0 mt-0 flex flex-col justify-center items-center '>
              <h1 className='head_text' style={{ fontFamily: "Yanone Kaffeesatz", fontWeight: "400", color: "#3d3d3d", marginTop: "5px" }}>
                Register<br className='max-md:hidden' />
              </h1>
              <form onSubmit={handleSubmit} className='w-[320px] sm:w-[600px]' style={{
                margin: "25px", marginTop: "10px", padding: "20px",

                border: "1px solid rgba(255, 255, 255, 0.125)", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", alignItems: "center"
              }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: "10px" }}>
                  <TextField
                    label="First Name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    margin="normal"
                    sx={{ ...textFieldStyle, flex: 1, marginRight: "10px" }}

                    InputLabelProps={{ style: { color: "#3d3d3d" } }}
                    InputProps={{ style: { color: "#3d3d3d" } }}
                  />
                  <TextField
                    label="Last Name"
                    name="last_name"
                    value={formData.last_name}
                    required
                    onChange={handleChange}
                    margin="normal"
                    sx={{...textFieldStyle,
                      flex: 1,  // Set your custom border color
                      
                    }}
                    InputLabelProps={{ style: { color: "#3d3d3d" } }}
                    InputProps={{ style: { color: "#3d3d3d" } }}
                  />
                </div>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  sx={{
                    marginBottom: "10px", ...textFieldStyle
                  }}
                  InputLabelProps={{ style: { color: "#3d3d3d" } }}
                  InputProps={{ style: { color: "#3d3d3d" } }}
                />
                <div className='!flex sm:!hidden' style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: "10px" }}>
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                    sx={{
                      flex: 1, marginRight: "10px",
                      marginBottom: "10px", ...textFieldStyle // Set your custom border color
                      
                    }}
                    InputLabelProps={{ style: { color: "#3d3d3d" } }}
                    InputProps={{ style: { color: "#3d3d3d" } }}
                  />
                  <TextField
                    label="Confirm Password"
                    name="confirm_password"
                    type="password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                    sx={{
                      flex: 1,
                      marginBottom: "10px",...textFieldStyle
                    }}
                    InputLabelProps={{ style: { color: "#3d3d3d" } }}
                    InputProps={{ style: { color: "#3d3d3d" } }}
                  />
                </div>

                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  className='!hidden sm:!flex'
                  sx={{
                    marginBottom: "10px",...textFieldStyle
                  }}
                  InputLabelProps={{ style: { color: "#3d3d3d" } }}
                  InputProps={{ style: { color: "#3d3d3d" } }}
                />
                <TextField
                  label="Confirm Password"
                  name="confirm_password"
                  type="password"
                  value={formData.confirm_password}
                  className='!hidden sm:!flex'
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  sx={{
                    marginBottom: "10px", ...textFieldStyle
                  }}
                  InputLabelProps={{ style: { color: "#3d3d3d" } }}
                  InputProps={{ style: { color: "#3d3d3d" } }}
                />
                <Button variant="contained" fullWidth className={styles.button30} type='submit' >
                  Create User
                </Button>

              </form>
              <GoogleLogin
                size='large'
                theme='outline'
                text='signup_with'
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
            </div>
          </header>
        </div>
      </main>
      <a href='/' className='md:left-24 sm:left-16 left-6' style={{
        fontFamily: "Yanone Kaffeesatz",
        fontSize: "20px",
        bottom: "20px",
        zIndex: "100",
        position: "absolute",
        filter: "contrast(0.4)"
      }}>Back to Home</a>
    </>
  )
}

export default App