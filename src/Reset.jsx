// ResetPassword.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ResetPasswordPage from "./components/ResetPassword"

const ResetPassword = () => {
  const { token } = useParams();
  if (!token) {
    // Handle the case where the token is not provided in the URL
    return <div>Token is missing.</div>;
  }

  return <ResetPasswordPage token={token} />;
};

export default ResetPassword;
