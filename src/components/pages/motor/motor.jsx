import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedText, Bigcontainer, CostSort, ItemContainer, ItemSort, MotorsBack, SortWrapper, TotalItemDiv, } from "./motorStyle.js";
import MotorController from "./motor.controller.jsx";
import MotorSwitchControl from "./motor.switch.controller.jsx";

const BASEURL = "https://api.dream-camper.kr/api/v1/";

const Motor = () => {
  const [active, setActive] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}motors/allMotors`);
        const caravan = await response.json();
        setTotalItems(caravan.data.length);
      } catch (error) {
        console.log("caravan data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <MotorsBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/motor">Motor</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Motor</h1>
      </MotorsBack>
      <Bigcontainer>
        <ItemContainer>
          <SortWrapper>
            <CostSort>
              <h1>Motor Details</h1>
            </CostSort>
            <ItemSort>
              <TotalItemDiv>
                <h1>
                  Items <span style={{ color: "#006DAB" }}>{totalItems}</span>{" "}
                </h1>
              </TotalItemDiv>
              <AnimatedText>Explore the World  with Our Camper</AnimatedText>
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
