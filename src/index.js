import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import App from "./App";
import Users from "./pages/Users";
import UsersNew from "./pages/UsersNew";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/one" element={<h1>(￣o￣) zzZZzzZZ</h1>} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/new" element={<UsersNew />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
