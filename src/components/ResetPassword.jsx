// ResetPasswordPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Button, TextField, Stack } from '@mui/material';
import styles from "../styles/Login.module.css"
import { logo } from '../assets';
// import Head from 'next/head';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const ResetPasswordPage = (token) => {
    const [open2, setOpen2] = React.useState(false);

    const handleClick2 = () => {
        setOpen2(true);
    };

    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen2(false);
    }
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('');
    const router = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            setSnackbarMessage("Passwords don't match");
            setSnackbarType('error');
            handleClick2();
            return;
        }
        if (newPassword.length < 8) {
            setSnackbarMessage("Oops! 🤦‍♂️ Passwords don't match. Please double-check and try again.");
            setSnackbarType('error');
            handleClick2();
            return;
        }
        try {
            const response = await fetch(`https://serenesage-ajgfh2cne6b2dsb0.z03.azurefd.net/login/reset/confirm/${token.token}`, {
                method: 'PATCH',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    new_password: newPassword,
                    confirm_new_pass: confirmNewPassword,
                }),
            });

            if (response.ok) {
                setSnackbarMessage('Password reset successful');
                setSnackbarType('success');
                handleClick2();
                setTimeout(() => {
                    router('/login');
                }, 1500)

                // You can redirect to a login page or show a success message
            }
            else {
                setSnackbarMessage('Reset link is invalid, expired, or has already been used. Please generate a new one.');
                setSnackbarType('error');
                handleClick2();
                setTimeout(() => {
                    router('/login');
                }, 2500)
                // Handle password reset failure, e.g., display an error message to the user
            }
        } catch (error) {
            console.log(error);
            setSnackbarMessage('Oops! 😅 Something went wrong on our end. Please try again later.');
            setSnackbarType('error');
            handleClick2();
            // Handle password reset error, e.g., display an error message to the user
        }
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
                        <nav className='flex justify-between items-center w-full mb-5 sm:mb-10 pt-6 flex-row'>
                            <img src={logo} alt='logo' className='w-[6.5rem] sm:w-28 object-contain' />
                            <div className='flex-row flex gap-4 '>
                                <a href='/register' className='black_btn'>
                                    Register
                                </a>
                                <a href='/login' className='black_btn'>
                                    Login
                                </a>
                            </div>
                        </nav>
                        <div className='mt-0 flex flex-col justify-center items-center '>
                            <h1 className='head_text1' style={{ fontFamily: "Yanone Kaffeesatz", fontWeight: "400", color: "#3d3d3d" }}>
                                Password Reset<br className='max-md:hidden' />
                            </h1>
                            <form onSubmit={handleResetPassword} style={{
                                width: "450px", margin: "25px", padding: "20px",

                                border: "1px solid rgba(255, 255, 255, 0.125)", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", alignItems: "center"
                            }}
                            >
                                <TextField
                                    label="New Password"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
                                    sx={{
                                        marginBottom: "20px", '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#1e1e1e', // Set your custom border color
                                        }
                                    }}
                                    InputLabelProps={{ style: { color: "#3d3d3d", fontFamily: "poppins" } }}
                                    InputProps={{ style: { color: "#3d3d3d", fontFamily: "poppins" } }}
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <TextField
                                    label="Confirm New Password"
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#1e1e1e', // Set your custom border color
                                        }
                                    }}
                                    InputLabelProps={{ style: { color: "#3d3d3d", fontFamily: "poppins" } }}
                                    InputProps={{ style: { color: "#3d3d3d", fontFamily: "poppins" } }}
                                    required
                                    type="password"
                                    value={confirmNewPassword}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                />
                                <Button
                                    variant="contained"
                                    fullWidth
                                    className={styles.button30}
                                    type="submit"
                                    sx={{ marginTop: 2 ,marginBottom:1.5}}
                                >
                                    Reset Password
                                </Button>
                            </form>
                        </div>
                    </header>
                </div>
            </main>

            <Link to='/' className='md:left-24 sm:left-16 left-6' style={{
                fontFamily: "Yanone Kaffeesatz",
                fontSize: "20px",
                bottom: "20px",
                position: "absolute",
                filter: "contrast(0.4)"
            }}>Back to Home</Link>


        </>
    );
};

export default ResetPasswordPage;
