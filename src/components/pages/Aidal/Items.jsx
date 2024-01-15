import React from "react";
import img from "../../../assets/car.png";
import { MenuItem, TextField } from "@mui/material";
import { motorsCarCard } from "../../test/motorsCarData";
import { Carname, Review, ReviewsCard, ReviewsDataRight } from "./style";
const names = ["Best", "Medium", "Low"];
const BASEURL = "http://localhost:5050/api/v1";

const Items = () => {
  const carDetail = motorsCarCard.CarInfo;
  const [personName, setPersonName] = React.useState([]);
  const [allData, setAllData] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
    }, []);  return (
    <Review>
      <Carname>
        <div style={{ display: "flex", gap: "20px" }}>
          Premium Review <p>35</p>
        </div>
        <div>
          <TextField
            size="small"
            label="Select"
            sx={{ width: 200 }}
            select
            value={personName}
            onChange={handleChange}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Carname>
      {allData.slice(0, 6).map((data, key) => (
        <div key={key}>
          <div>
            <ReviewsCard>
           
                <div>
                  <img src={img} alt="img" />
                </div>
              
              <ReviewsDataRight>
                <div>
                  <div>{data.name}</div>
                  <div>{data.company}</div>
                  <div>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* <p>Data:{data.car.date}</p> */}
                  <p>Views: 135</p>
                </div>
              </ReviewsDataRight>
            </ReviewsCard>
          </div>
        </div>
      ))}
    </Review>
  );
};

export default Items;
