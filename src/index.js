import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Aidal from "./components/pages/Aidal/carInfoById";
import Places from "./components/pages/CampingPlaces/Places";
import Location from "./components/pages/Location/Location";
import "./index.css";
import AddToCard from "./components/pages/AddToCard/AddToCard";
import CompareModels from "./components/pages/CompareModels/CompareModels";
import Orders from "./components/pages/myOrders/orders";
import DisplayNavbar from "./components/navbar/DisplayNavbar";
import Home from "./components/home/home";
import Motor from "./components/pages/motor/motor";
import Login from "./components/pages/loginpage/login";
import Register from "./components/pages/loginpage/register";
import Caravan from "./components/pages/caravan/caravan";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <DisplayNavbar>
         <Navbar />
      </DisplayNavbar>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="home" element={<Home/>} />
        <Route path="register" element={<Register/>} />
        <Route path="aidal/:id" element={<Aidal />} />
        <Route path="motors" element={<Motor/>} />
        <Route path="caravan" element={<Caravan/>} />
        <Route path="places" element={<Places />} />
        <Route path="location" element={<Location />} />
        <Route path="card" element={<AddToCard />} />
        <Route path="comparemodels/:id" element={<CompareModels />} />
        <Route path="orders/:id" element={<Orders />} />
      </Routes>
      <DisplayNavbar>
       <Footer/>
      </DisplayNavbar>
    </BrowserRouter>
);

