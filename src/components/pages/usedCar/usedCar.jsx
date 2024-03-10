import React, { useState } from "react";

import {
  Bigcontainer,
  CostSort,
  ItemContainer,
  ItemSort,
  SelectionCars,
  SelectionDiv,
  SortWrapper,
  TotalItemDiv,
  UsedCarBack,
} from "./usedCarStyle.js";
import { Link } from "react-router-dom";
import UsedCarSwitchControl from "./usedCar.switch.controller.jsx";
import UsedCarController from "./usedCar.controller.jsx";

const BASEURL = "https://rahmatullo-camping-api.isabek.uz/api/v1/";


const UsedCar = () => {
  const [active, setActive] = useState(true)
  const [totalUsers, setTotalUsers] = useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}/usedCars/allUsedCars`);
        const UsedCar = await response.json();
        setTotalUsers(UsedCar.data.length);
      } catch (error) {
        console.log("UsedCar data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <UsedCarBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/usedCar">Used Car</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Used Car</h1>
      </UsedCarBack>
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
              <UsedCarController
                onClick={(state) => {
                  setActive(state);
                }}
              />
            </ItemSort>
          </SortWrapper>
          <UsedCarSwitchControl active={active} />
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default UsedCar;