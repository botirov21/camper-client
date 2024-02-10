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
  ImageOfOffer,
  ThinLine,
} from "./caravanStyle";
import { Accordion, AccordionDetails, AccordionSummary, Typography, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BASEURL = "http://localhost:5050/api/v1/";

const CaravanHMenu = () => {
  const [checkActive, setCheckActive] = useState(true);
  const [allData, setAllData] = React.useState([]);
  const [companyCheckboxes, setCompanyCheckboxes] = useState([]);
  const [filteredCaravan, setFilteredCaravan] = useState([]);

  //getting datas
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}caravans/allCaravans`);
        const caravan = await response.json();
        setAllData(caravan.data);
        setFilteredCaravan(caravan.data);
        setCompanyCheckboxes(caravan.data);
      } catch (error) {
        console.log("caravan data is wrong:", error);
      }
    };
    fetchData();
  }, []);

//chekboxcheking by car brand
  const handleAdriaCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.brand === "Adria");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleSwiftCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.brand === "Swift");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleBaileyCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.brand === "Bailey");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

// checkbox checking by number of people
  const handlePeople3heckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.seats === "3");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handlePeople4CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.seats === "4");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handlePeople5CheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.seats === "5");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };

//checkbox  cheking by Licence
  const handleLicenceACheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.licence === "A");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleLicenceBCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.licence === "B");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };
  const handleLicenceCCheckboxClick = () => {
    if (checkActive) {
      const checkedBox = allData.filter((data) => data.licence === "C");
      setFilteredCaravan(checkedBox);
    } else {
      setFilteredCaravan(allData);
    }
    setCheckActive(!checkActive);
  };


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
        {/* <ThinLine /> */}
        <ChoicesCheck>
          <Accordion className='options'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h1"  >
                Brand
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handleAdriaCheckboxClick} />
                  <div><p>Adria</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handleSwiftCheckboxClick} />
                  <div><p>Swift</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handleBaileyCheckboxClick} />
                  <div><p>Bailey</p></div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='options'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h1"  >
                License type
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input class="radio" style={{ width: "22px", height: "22px" }} type="checkbox" onClick={handleLicenceACheckboxClick} />
                  <div><p>A</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" onClick={handleLicenceBCheckboxClick} />
                  <div><p>B</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" onClick={handleLicenceCCheckboxClick} />
                  <div><p>C</p></div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='options'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h1"  >
                Number of travelers
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handlePeople3heckboxClick} />
                  <div><p>3</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handlePeople4CheckboxClick} />
                  <div><p>4</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handlePeople5CheckboxClick} />
                  <div><p>5</p></div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='options'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h1"  >
                Location
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handleLocationSeoulCheckboxClick} />
                  <div><p>Seul</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handleLocationBusanCheckboxClick} />
                  <div><p>Busan</p></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input style={{ width: "22px", height: "22px" }} type="checkbox" name="option" onClick={handleLocationGwangjuCheckboxClick} />
                  <div><p>Gwangju</p></div>
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
      <Order>
        {filteredCaravan.map((data) => {
          return (
            <Link to={`/motorInfo/${data._id}`} key={data._id}>
              <HMenuDesign>
              <ImageOfOffer/>
                <OrderLeft>
                  {/* <img src={hmenuimg} alt="order" /> */}
                </OrderLeft>
                <OrderRight>
                  <Writings>
                    <div>
                      <h1>{data.name}</h1>
                      <p>{data.brand}</p>
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
export default CaravanHMenu;