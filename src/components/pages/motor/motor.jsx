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
import { motorsCarCard } from "../../test/motorsCarData.js";
import { Link } from "react-router-dom";
import CaravanController from "./motorController.jsx";
import { Accordion, AccordionDetails, AccordionSummary, Typography, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CarvanSwitchControl from "./motorSwitchController.jsx";


const Motor = ({ onClick }) => {
  const [active, setActive] = useState(true)
  const [filteredData, setFilteredData] = useState(motorsCarCard.CarInfo);
  const handleClick = () => {
    const sortedCars = [...motorsCarCard.CarInfo];
    sortedCars.sort((a, b) => {
      const nameA = a.car.name.toLowerCase();
      const nameB = b.car.name.toLowerCase();
      return nameA.localeCompare(nameB);
    });

    const filteredCars = sortedCars.filter((data) =>
      data.car.name.startsWith("르벤투스")
    );

    setFilteredData(filteredCars);
  };
  return (
    <div style={{ background: "#fafafa" }}>
      <MotorsBack>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Link to="/">Home /</Link>
          <Link to="/motors">Motors</Link>
        </div>
        <h3>Our Ranges</h3>
        <h1>Motors</h1>
      </MotorsBack>
      <Bigcontainer>
        <CostContainer>
          <div style={{ borderBottom: "solid 1px rgba(55, 55, 55, 0.5)", width: "100%", paddingTop: "17px", marginLeft: "40px" }} >
            <h1>Cost of cars</h1>
          </div>
          <Adressdiv>
            <div>
              <label>From</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">to</label>
              <input type="text" />
            </div>
          </Adressdiv>
          <ChoicesCheck>
            <Accordion className='options'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h1"  >
                  Brand
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography >
                  <div>
                    <input class="radio" style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>Aidal</p></div>
                  </div>
                  <div >
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>Knal</p></div>
                  </div>
                  <div >
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>escape</p></div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='options'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h1"  >
                Company
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <div>
                    <input class="radio" style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>Aidal</p></div>
                  </div>
                  <div >
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>Knal</p></div>
                  </div>
                  <div >
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>escape</p></div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='options'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h1"  >
                License type
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <div>
                    <input class="radio" style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>Aidal</p></div>
                  </div>
                  <div >
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>Knal</p></div>
                  </div>
                  <div >
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>escape</p></div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='options'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h1"  >
                Number of travelers
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <div>
                    <input class="radio" style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>Aidal</p></div>
                  </div>
                  <div >
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>Knal</p></div>
                  </div>
                  <div >
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>escape</p></div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='options'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h1"  >
                  Location
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <div>
                    <input class="radio" style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>Aidal</p></div>
                  </div>
                  <div >
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>Knal</p></div>
                  </div>
                  <div >
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>escape</p></div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </ChoicesCheck>
          <CancelButton>
            <div>
              <button>Cancel</button>
              <button>Search</button>
            </div>
          </CancelButton>
          <ComapreCars>
            <h1>Compare</h1>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </ComapreCars>
        </CostContainer>
        <ItemContainer>
          <ItemSort>
            <SelectionDiv>
              <div>
                <h1>Item 250000</h1>
              </div>
              <label htmlFor="input">Sort by</label>
              <SelectionCars placeholder="select">
                <option value="">Car</option>
                <option value="">Car</option>
                <option value="">Car</option>
                <option value="">Car</option>
                <option value="">Car</option>
              </SelectionCars>
              <div>
                <SelectionNumbers name="" id="">
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </SelectionNumbers>
              </div>
              <CaravanController onClick={(state) => {
                setActive(state)
              }} />
            </SelectionDiv>
          </ItemSort>
          <CarvanSwitchControl active={active} />
        </ItemContainer>
      </Bigcontainer>
    </div>
  );
};

export default Motor;
