import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from "./App";
import Privacy from "./Privacy";
import Login from "./Login"
import Register from "./Register";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ResetPasswordPage from "./Reset";

const Root = () => (
  
  <GoogleOAuthProvider clientId="887681622989-btdev6koofifc8ede3c2euv3lq2a2r64.apps.googleusercontent.com">
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<App />} />
        <Route path="/reset/:token" element={<ResetPasswordPage/>}/>
        
      </Routes>
    </Router>
</React.StrictMode>
</GoogleOAuthProvider>
);


ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
