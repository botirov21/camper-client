import React, { useEffect, useReducer, useState } from "react";
import {
  DropdownShow,
  Dropmenu,
  Hamburger,
  Infos,
  Navdiv,
  Selection,
} from "./style";
import { Link } from "react-router-dom";
import Header from "./ResponsiveHamburger";
import motorCar from "../../assets/slidecar.png";
import caravanCar from "../../assets/caravanCar.png";
import tuningCar from "../../assets/tuningCar.png";
import usedCar from "../../assets/usedCar.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import place1 from "../../assets/place1.png";
import place2 from "../../assets/place2.png";
import place3 from "../../assets/place3.png";
import place4 from "../../assets/place4.jpg";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Button, Drawer, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const reducer = (state, action) => {
  switch (action.type) {
    case "toggleShowMotorText":
      return { showMotorText: !state.showMotorText, showCaravanText: false, ShowTuningText: false, showUsedCarText: false, showPlacesText: false };
    case "toggleShowCaravanText":
      return { showCaravanText: !state.showCaravanText, showMotorText: false, ShowTuningText: false, showUsedCarText: false, showPlacesText: false };
    case "toggleShowTuningText":
      return { ShowTuningText: !state.ShowTuningText, showMotorText: false, showCaravanText: false, showUsedCarText: false, showPlacesText: false };
    case "toggleShowUsedCarText":
      return { showUsedCarText: !state.showUsedCarText, showMotorText: false, showCaravanText: false, ShowTuningText: false, showPlacesText: false };
    case "toggleShowPlacesText":
      return { showPlacesText: !state.showPlacesText, showMotorText: false, showCaravanText: false, ShowTuningText: false, showUsedCarText: false, };
    default:
      return state;
  }
};


const BASEURL = "https://rahmatullo-camping-api.isabek.uz/api/v1";



const Navbar = () => {

  const [dispacchState, dispatch] = useReducer(reducer, {
    showMotorText: false,
    showCaravanText: false,
  });

  const [allData, setAllData] = useState()
  const [allDataCaravan, setAllDataCaravan] = useState()
  const [allDataTuning, setAllDataTuning] = useState()
  const [allDataUsedCars, setAllDataUsedCars] = useState()
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <AccountCircleIcon />   <Typography>My profile </Typography>
      </List>
      <Divider />
    </Box>
  );



  //Fetch motor datas
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}/motors/allMotors`);
        const motor = await response.json();
        setAllData(motor.data)
      } catch (error) {
        console.log("Motor data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  //Fetch caravan datas
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCaravan = await fetch(`${BASEURL}/caravans/allCaravans`);
        const caravan = await responseCaravan.json();
        setAllDataCaravan(caravan.data)
      } catch (error) {
        console.log("caravan data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  //Fetch tuning datas
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsetunings = await fetch(`${BASEURL}/tunings/allTunings`);
        const tunings = await responsetunings.json();
        setAllDataTuning(tunings.data)
      } catch (error) {
        console.log("tunings data is wrong:", error);
      }
    };
    fetchData();
  }, []);

  //Fetch usedCar datas
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseUsedCars = await fetch(`${BASEURL}/usedCars/allUsedCars`);
        const usedCars = await responseUsedCars.json();
        setAllDataUsedCars(usedCars.data)
      } catch (error) {
        console.log("usedCars data is wrong:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Navdiv>
      <Hamburger>
        <Header />
      </Hamburger>
      <a href="/">Camper</a>
      <Infos>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <Link to="/motors">Motor</Link>
          <ExpandMoreIcon
            onClick={() => {
              dispatch({ type: "toggleShowMotorText" });
            }}
          />
        </div>
        {dispacchState.showMotorText && (
          <Dropmenu>
            <DropdownShow>
              {allData.slice(0, 4).map((data) => {
                return (
                  <div key={data.id}>
                    <img style={{ height: '130px' }} src={motorCar} alt="car" />
                    <p>{data.name}</p>
                  </div>
                )
              })}
            </DropdownShow>
            <Link to="/motors">
              <button>See all</button>
            </Link>
          </Dropmenu>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <Link to="/caravan">Carvan</Link>
          <ExpandMoreIcon
            onClick={() => {
              dispatch({ type: "toggleShowCaravanText" });
            }}
          />
        </div>
        {dispacchState.showCaravanText && (
          <Dropmenu>
            <DropdownShow>
              {allDataCaravan.slice(0, 4).map((data) => {
                return (
                  <div key={data.id}>
                    <img style={{ height: '130px' }} src={caravanCar} alt="car" />
                    <p>{data.name}</p>
                  </div>
                )
              })}
            </DropdownShow>
            <Link to="/caravan">
              <button>See all</button>
            </Link>
          </Dropmenu>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <Link to="/tuning">Tuning</Link>
          <ExpandMoreIcon
            onClick={() => {
              dispatch({ type: "toggleShowTuningText" });
            }}
          />
        </div>
        {dispacchState.ShowTuningText && (
          <Dropmenu>
            <DropdownShow>
              {allDataTuning.slice(0, 4).map((data) => {
                return (
                  <div>
                    <img style={{ height: '130px' }} src={tuningCar} alt="car" />
                    <p>{data.name}</p>
                  </div>
                )
              })}
            </DropdownShow>
            <Link to="/tuning">
              <button>See all</button>
            </Link>
          </Dropmenu>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <Link to="/usedCar">Used Car</Link>
          <ExpandMoreIcon
            onClick={() => {
              dispatch({ type: "toggleShowUsedCarText" });
            }}
          />
        </div>
        {dispacchState.showUsedCarText && (
          <Dropmenu>
            <DropdownShow>
              {allDataUsedCars.slice(0, 4).map((data) => {
                return (
                  <div>
                    <img style={{ height: '130px' }} src={usedCar} alt="car" />
                    <p>{data.name}</p>
                  </div>
                )
              })}
            </DropdownShow>
            <Link to="/usedCar">
              <button>See all</button>
            </Link>
          </Dropmenu>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <Link to="/places">Camping Place</Link>
          <ExpandMoreIcon
            onClick={() => {
              dispatch({ type: "toggleShowPlacesText" });
            }}
          />
        </div>
        {dispacchState.showPlacesText && (
          <Dropmenu>
            <DropdownShow>
              <img style={{ height: '150px' }} src={place1} alt="place" />
              <img style={{ height: '150px' }} src={place2} alt="place" />
              <img style={{ height: '150px' }} src={place3} alt="place" />
              <img style={{ height: '150px', borderRadius: "5px" }} src={place4} alt="place" />
            </DropdownShow>
            <Link to="/places">
              <button>See all</button>
            </Link>
          </Dropmenu>
        )}
      </Infos>
      <Selection>
      <Link to='/loginPage'>
            <Button >Sign in</Button>
      </Link>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Box sx={{color: "blue"}} onClick={toggleDrawer(anchor, true)}><AccountCircleIcon color="blue"/></Box>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Selection>
    </Navdiv>
  );
};

export default Navbar;
