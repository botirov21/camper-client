import React from "react";
import {
  Adressdiv,
  Bigcontainer,
  CancelButton,
  ChoicesCheck,
  ComapreCars,
  CostContainer,
  ImageOfOffer,
  ItemContainer,
  ItemSort,
  MotorsBack,
  Orders,
  SelectionCars,
  SelectionDiv,
  SelectionNumbers,
  VMenuDesign,
  VMenuDesignLeft,
  VmenuWrapper,
} from "./motorStyle.js"; import { Link } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary, Typography, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BASEURL = "http://localhost:5050/api/v1";


const MotorsVMenu = () => {
  const [allData, setAllData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}/motors/allMotors`);
        const motors = await response.json();
        setAllData(motors.data);
      } catch (error) {
        console.log("Motor data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <VmenuWrapper>
      <VMenuDesignLeft>
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
              expandIcon={<ExpandMoreIcon />}
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
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h1"  >
                Company
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                <div>
                  <input class="radio" style={{ width: "22px", height: "22px" }} type="checkbox" />
                  <div><p>BMW</p></div>
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
      </VMenuDesignLeft>
      <VMenuDesign>
        {allData.map((data) => {
          return (
            <Orders key={data.id}>
              <ImageOfOffer />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                }}
              >
                <h4>{data.name}</h4>
              </div>
              <div>
                <p>{data.company}</p>
              </div>
              <h2>{data.cost}</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Link to={`/aidal/${data._id}`}>
                  <button>Order</button>
                </Link>
                <Link to={`/comparemodels/${data._id}`}>
                  <button>Compare</button>
                </Link>
              </div>
            </Orders>
          );
        })}
      </VMenuDesign>
    </VmenuWrapper>

  );
};

export default MotorsVMenu;
