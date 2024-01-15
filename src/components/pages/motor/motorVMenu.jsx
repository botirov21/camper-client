import React from "react";
import { ImageOfOffer, Orders, VMenuDesign } from "./motorStyle";

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
    <VMenuDesign>
      {allData.map((data) => {
        return (
          <Orders key={data.id}>
          <ImageOfOffer />
          <h1>{data.name}</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
            }}
          >
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
            <a href="/orders">Oreder</a>
            <a href="/comparemodels">Compare</a>
          </div>
        </Orders>
        );
      })}
    </VMenuDesign>
  );
};

export default MotorsVMenu;
