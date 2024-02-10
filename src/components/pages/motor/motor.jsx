import React, { useState } from "react";

import {
  Adressdiv,
  Bigcontainer,
  CancelButton,
  ChoicesCheck,
  ComapreCars,
  CostContainer,
  CostSort,
  ItemContainer,
  ItemSort,
  MotorsBack,
  SelectionCars,
  SelectionDiv,
  SelectionNumbers,
  SortWrapper,
  TotalItemDiv,
} from "./motorStyle.js";
import { Link } from "react-router-dom";
import CaravanController from "./motor.controller.jsx";
import { Accordion, AccordionDetails, AccordionSummary, Typography, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CarvanSwitchControl from "./motor.switch.controller.jsx";
import MotorController from "./motor.controller.jsx";
import MotorSwitchControl from "./motor.switch.controller.jsx";

const BASEURL = "http://localhost:5050/api/v1";


const Motor = () => {
  const [active, setActive] = useState(true)
  const [totalUsers, setTotalUsers] = useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}/motors/allMotors`);
        const motor = await response.json();
        setTotalUsers(motor.data.length);
      } catch (error) {
        console.log("Motor data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
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
          <SortWrapper>
            <CostSort>
              <h1>Cost of cars</h1>
            </CostSort>
            <ItemSort>
              <TotalItemDiv>
                <h1>Items <span style={{color: '#006DAB'}}>{totalUsers}</span> </h1>
              </TotalItemDiv>
              <SelectionDiv>
                <p>Sort by</p>
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
          </SortWrapper>
          <MotorSwitchControl active={active} />
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Motor;