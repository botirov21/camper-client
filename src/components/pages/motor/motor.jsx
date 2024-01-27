import React, { useState } from "react";

import {
  Adressdiv,
  Bigcontainer,
  CancelButton,
  ChoicesCheck,
  ComapreCars,
  CostContainer,
  ItemContainer,
  ItemSort,
  MotorsBack,
  SelectionCars,
  SelectionDiv,
  SelectionNumbers,
} from "./motorStyle.js";
import { Link } from "react-router-dom";
import CaravanController from "./motorController.jsx";
import { Accordion, AccordionDetails, AccordionSummary, Typography, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CarvanSwitchControl from "./motorSwitchController.jsx";
import MotorController from "./motorController.jsx";
import MotorSwitchControl from "./motorSwitchController.jsx";

const BASEURL = "http://localhost:5050/api/v1";


const Motor = () => {
  const [active, setActive] = useState(true)
  const [checkActive, setCheckActive] = useState(true)
  const [companyCheckBox, setCompanyCheckBox] = useState([]);
  const [filtredMotors, setFiltredMotors] = useState([]) 

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}/motors/allMotors`);
        const motors = await response.json();
        // setAllData(motors.data);
        setFiltredMotors(motors.data);
        setCompanyCheckBox(motors.data);
      } catch (error) {
        console.log("Motor data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  // const handleCompanyCheckBoxChange = () => {
  //   if (checkActive) {
  //     const checkedBox = allData.filter((data) => data.brand === "BMW");
  //     setFiltredMotors(checkedBox);
  //   } else {
  //     setFiltredMotors(allData);
  //   }
  //   setCheckActive(!checkActive);
  // } 
  return (
    <div style={{ background: "#fafafa" }}>
      <MotorsBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/caravan">Caravan</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Motors</h1>
      </MotorsBack>
      <Bigcontainer>
        <ItemContainer>
          <ItemSort>
            <div
              style={{
                display: "flex",
                gap: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>Item</h1>
              <span style={{ color: "#006DAB", fontSize: "18px" }}>25000</span>
            </div>
            <SelectionDiv>
              <label htmlFor="input">Sort by</label>
              <SelectionCars placeholder="select">
                <option value="">Motor Standart</option>
                <option value="">Motor Premium</option>
                <option value="">Motor Gold</option>
              </SelectionCars>
            </SelectionDiv>
            <MotorController
              onClick={(state) => {
                setActive(state);
              }}
            />
          </ItemSort>
          <MotorSwitchControl active={active} />
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Motor;