import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";

import App from "./App";
import Privacy from "./Privacy";
import Login from "./Login"
import Register from "./Register";


const Root = () => (
  <React.StrictMode>
  <Provider>
    <Router>
      <Routes>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </Provider>
</React.StrictMode>
);


ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
