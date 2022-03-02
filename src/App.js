import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Login";
import Members from "./Members";
import ProtectedRoute from "./ProtectedRoute";
import Registration from "./Register";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">UserApp</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/register" class="nav-item nav-link">Register</Link>
              <Link to="/login" class="nav-item nav-link">Login</Link>
              <Link to="/members" class="nav-item nav-link">Members</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/members" element={<Members />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
