import React, { useState } from "react";
import TuningSwitchControl from "./tuning.switch.controller.jsx";
import TuningController from "./tuning.controller.jsx";
import {
  Bigcontainer,
  CostSort,
  ItemContainer,
  ItemSort,
  SelectionCars,
  SelectionDiv,
  SortWrapper,
  TotalItemDiv,
  TuningBack,
} from "./tuningStyle.js";
import { Link } from "react-router-dom";;


const BASEURL = "http://localhost:5050/api/v1/";


const Tuning = () => {
  const [active, setActive] = useState(true)
  const [totalUsers, setTotalUsers] = useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}tunings/allTunings`);
        const tuning = await response.json();
        setTotalUsers(tuning.data.length);
      } catch (error) {
        console.log("tuning data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <TuningBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/tuning">Tuning</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Tuning</h1>
      </TuningBack>
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
              <TuningController
                onClick={(state) => {
                  setActive(state);
                }}
              />
            </ItemSort>
          </SortWrapper>
          <TuningSwitchControl active={active} />
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Tuning