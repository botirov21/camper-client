import React from "react";
import { ImageOfOffer, Orders, VMenuDesign } from "./motorStyle";
import { Link } from "react-router-dom";

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

  );
};

export default MotorsVMenu;
