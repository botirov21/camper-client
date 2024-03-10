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
import Login from "./components/pages/loginpage/login";
import Register from "./components/pages/loginpage/register";
import Caravan from "./components/pages/caravan/caravan";
import Tuning from "./components/pages/tuning/tuning";
import UsedCar from "./components/pages/usedCar/usedCar";
import MotorCarInfo from "./components/pages/Aidal/motorInfoById";
import CaravanInfo from "./components/pages/Aidal/caravanInfo";
import Motor from "./components/pages/motor/motor";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      {/* <DisplayNavbar>
      </DisplayNavbar> */}
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Login/>} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="register" element={<Register/>} />
        <Route path="aidal/:id" element={<Aidal />} />
        <Route path="motors" element={<Motor/>} />
        <Route path="caravan" element={<Caravan/>} />
        <Route path="tuning" element={<Tuning/>} />
        <Route path="usedCar" element={<UsedCar/>} />
        <Route path="places" element={<Places />} />
        <Route path="location" element={<Location />} />
        <Route path="card" element={<AddToCard />} />
        <Route path="comparemodels/:id" element={<CompareModels />} />
        <Route path="orders/:id" element={<Orders />} />
        <Route path="motorInfo/:id" element={<MotorCarInfo/>} />
        <Route path="caravanInfo/:id" element={<CaravanInfo/>} />
      </Routes>
      <DisplayNavbar>
       <Footer/>
      </DisplayNavbar>
    </BrowserRouter>
);

