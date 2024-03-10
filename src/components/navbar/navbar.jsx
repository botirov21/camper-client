import React, { useEffect, useReducer, useState } from "react";
import {
  DropdownShow,
  Dropmenu,
  Hamburger,
  HamburgerRight,
  Infos,
  Navdiv,
  Selection,
} from "./style";
import people from "../../assets/Vector.png";
import { Link, NavLink } from "react-router-dom";
import ImageWithDropdown from "./ImageDropdown/dropdown";
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
  const [state, dispatch] = useReducer(reducer, {
    showMotorText: false,
    showCaravanText: false,
  });
  const [allData, setAllData] = useState()
  const [allDataCaravan, setAllDataCaravan] = useState()
  const [allDataTuning, setAllDataTuning] = useState()
  const [allDataUsedCars, setAllDataUsedCars] = useState()


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
        {state.showMotorText && (
          <Dropmenu>
            <DropdownShow>
              {allData.slice(0, 4).map((data) => {
                return (
                  <div key={data.id}>
                  <img style={{height: '130px'}}  src={motorCar} alt="car" />
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
        {state.showCaravanText  && (
          <Dropmenu>
            <DropdownShow>
            {allDataCaravan.slice(0, 4).map((data) => {
                return (
                  <div key={data.id}>
                    <img  style={{height: '130px'}} src={caravanCar} alt="car" />
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
        {state.ShowTuningText && (
          <Dropmenu>
            <DropdownShow>
              {allDataTuning.slice(0, 4).map((data) => {
                return (
                  <div>
                    <img style={{height: '130px'}} src={tuningCar} alt="car" />
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
        {state.showUsedCarText && (
          <Dropmenu>
            <DropdownShow>
              {allDataUsedCars.slice(0, 4).map((data) => {
                return (
                  <div>
                    <img style={{height: '130px'}} src={usedCar} alt="car" />
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
        {state.showPlacesText && (
          <Dropmenu>
            <DropdownShow>
                    <img style={{height: '150px'}} src={place1} alt="place" />
                    <img style={{height: '150px'}} src={place2} alt="place" />
                    <img style={{height: '150px'}} src={place3} alt="place" />
                    <img style={{height: '150px', borderRadius: "5px"}} src={place4} alt="place" />
              </DropdownShow>
              <Link to="/places">
                <button>See all</button>
             </Link>
          </Dropmenu>
        )}
      </Infos>
      <Selection>
        <Link to="login">
          <img src={people} className="people" alt="people" />
        </Link>
        <select name="Language">
          <option value="eng">ENG</option>
          <option value="kor">KOR</option>
          <option value="uz">UZ</option>
          <option value="rus">RUS</option>
        </select>
      </Selection>
    </Navdiv>
  );
};

export default Navbar;
