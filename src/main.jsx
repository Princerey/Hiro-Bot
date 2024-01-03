import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from "./App";
import Privacy from "./Privacy";
import Login from "./Login"
import Register from "./Register";

const Root = () => (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
</React.StrictMode>
);


ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
