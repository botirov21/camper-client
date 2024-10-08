import React, { useState } from "react";
import TuningSwitchControl from "./tuning.switch.controller.jsx";
import TuningController from "./tuning.controller.jsx";
import {
  AnimatedText,
  Bigcontainer,
  CostSort,
  ItemContainer,
  ItemSort,
  SortWrapper,
  TotalItemDiv,
  TuningBack,
} from "./tuningStyle.js";
import { Link } from "react-router-dom";;


const BASEURL = "https://api.dream-camper.kr/api/v1/";


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
              <h1>Tuning Details</h1>
            </CostSort>
            <ItemSort>
              <TotalItemDiv>
                <h1>Items <span style={{color: '#006DAB'}}>{totalUsers}</span> </h1>
              </TotalItemDiv>
              <AnimatedText>Explore the World  with Our Camper</AnimatedText>
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