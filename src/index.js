import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Aidal from "./components/pages/Aidal/carInfoById";
import Places from "./components/pages/CampingPlaces/Places";
import Location from "./components/pages/Location/Location";
import "./index.css";
import AddToCard from "./components/pages/AddToCard/AddToCard";
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
import TuningCarInfo from "./components/pages/Aidal/tuningInfo";
import UsedCarInfo from "./components/pages/Aidal/usedCarInfo";



const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <DisplayNavbar>
      <Navbar />
      </DisplayNavbar>
      <Routes>
        <Route path="/loginPage" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Home/>} />
        <Route path="aidal/:id" element={<Aidal />} />
        <Route path="motors" element={<Motor/>} />
        <Route path="caravan" element={<Caravan/>} />
        <Route path="tuning" element={<Tuning/>} />
        <Route path="usedCar" element={<UsedCar/>} />
        <Route path="places" element={<Places />} />
        <Route path="location" element={<Location />} />
        <Route path="card" element={<AddToCard />} />
        <Route path="orders/:id" element={<Orders />} />
        <Route path="motorInfo/:id" element={<MotorCarInfo/>} />
        <Route path="caravanInfo/:id" element={<CaravanInfo/>} />
        <Route path="tuningInfo/:id" element={<TuningCarInfo/>} />
        <Route path="usedCarInfo/:id" element={<UsedCarInfo/>} />
      </Routes>
      <DisplayNavbar>
       <Footer/>
      </DisplayNavbar>
    </BrowserRouter>
);

