import React, { useState } from "react";
import {
  HMenuDesign,
  Order,
  OrderButton,
  OrderLeft,
  OrderRight,
  Writings,
} from "../myOrders/style";
import { Link } from "react-router-dom";
import {
  Adressdiv,
  Bigcontainer,
  CancelButton,
  ChoicesCheck,
  ComapreCars,
  CostContainer,
  OptionsCheck,
  ThinLine,
} from "./motorStyle";
import { Accordion, AccordionDetails, AccordionSummary, Typography, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BASEURL = "http://localhost:5050/api/v1/";

const MotorHMenu = () => {
  const [checkActive, setCheckActive] = useState(true);
  const [allData, setAllData] = React.useState([]);
  const [companyCheckboxes, setCompanyCheckboxes] = useState([]);
  const [filteredCaravan, setFilteredCaravan] = useState([]);

  //getting datas
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}motors/allMotors`);
        const motor = await response.json();
        setAllData(motor.data);
        setFilteredCaravan(motor.data);
        setCompanyCheckboxes(motor.data);
      } catch (error) {
        console.log("Motor data is wrong:", error);
      }
    };
    fetchData();
  }, []);


//checkbox  cheking by Location
  const handleLocationBusanCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.location === "Busan");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handleLocationSeoulCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.location === "Seoul");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleLocationGwangjuCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.location === "Gwangju");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
// checkbox checking by number of people

  const handlePeople3heckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.people === "3");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handlePeople4CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.people === "4");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

  const handlePeople5CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.people === "5");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  //chekboxcheking by car company
  const handleAdriaCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "Adria");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleSwiftCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "Swift");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleBaileyCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.company === "Bailey");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  return (
    <Bigcontainer>
      <CostContainer>
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
        <ThinLine />
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
                <Typography style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <input  style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handleAdriaCheckboxClick}/>
                    <div><p>Adria</p></div>
                  </div>  
                  <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handleSwiftCheckboxClick}/>
                    <div><p>Swift</p></div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handleBaileyCheckboxClick}/>
                    <div><p>Bailey</p></div>
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
                <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <input class="radio" style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>A</p></div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>B</p></div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" />
                    <div><p>C</p></div>
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
                <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <input  style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handlePeople3heckboxClick}/>
                    <div><p>3</p></div>
                  </div>  
                  <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handlePeople4CheckboxClick}/>
                    <div><p>4</p></div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap:'10px'}}>
                    <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handlePeople5CheckboxClick}/>
                    <div><p>5</p></div>
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
        <ChoicesCheck>
          <div>
            <input type="checkbox"  onClick={handleLocationSeoulCheckboxClick}/>
            <label htmlFor="">Seoul</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleLocationBusanCheckboxClick} />
            <label htmlFor="">Busan</label>
          </div>
          <div>
            <input type="checkbox" onClick={handleLocationGwangjuCheckboxClick}/>
            <label htmlFor="">Gwangju</label>
          </div>
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
      <Order>
        {filteredCaravan.map((data) => {
          return (
            <Link to={`/motorInfo/${data._id}`} key={data._id}>
              <HMenuDesign>
                <OrderLeft>
                  {/* <img src={hmenuimg} alt="order" /> */}
                </OrderLeft>
                <OrderRight>
                  <Writings>
                    <div>
                      <h1>{data.name}</h1>
                      <p>{data.company}</p>
                    </div>
                    <div>
                      <h2>{data.cost}</h2>
                    </div>
                  </Writings>
                  <Writings>
                    <OrderButton>Order</OrderButton>
                    <OrderButton>Compare</OrderButton>
                  </Writings>
                </OrderRight>
              </HMenuDesign>
            </Link>
          );
        })}
      </Order>
    </Bigcontainer>
  );
};
export default MotorHMenu;