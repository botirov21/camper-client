import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatedText,
  Bigcontainer,
  CaravanBack,
  CostSort,
  ItemContainer,
  ItemSort,
  SortWrapper,
  TotalItemDiv,
} from "./caravanStyle.js";
import CaravanSwitchControl from "./caravan.switch.controller.jsx";
import CaravanController from "./caravan.controller.jsx";

const BASEURL = "https://api.dream-camper.kr/api/v1/";

const Caravan = () => {
  const [active, setActive] = useState(true);
  const [totalItems, setTotalItems] = useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}caravans/allCaravans`);
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
      <CaravanBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/home">Home /</Link>
          <Link to="/caravan">Caravan</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Caravan</h1>
      </CaravanBack>
      <Bigcontainer>
        <ItemContainer>
          <SortWrapper>
            <CostSort>
              <h1>Caravan Details</h1>
            </CostSort>
            <ItemSort>
              <TotalItemDiv>
                <h1>
                  Items <span style={{ color: "#006DAB" }}>{totalItems}</span>{" "}
                </h1>
              </TotalItemDiv>
              <AnimatedText>Explore the World  with Our Camper</AnimatedText>
              <CaravanController
                onClick={(state) => {
                  setActive(state);
                }}
              />
            </ItemSort>
          </SortWrapper>
          <CaravanSwitchControl active={active} />
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Caravan;
