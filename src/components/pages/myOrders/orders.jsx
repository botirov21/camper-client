import React, { useEffect, useState } from 'react'
import { Linediv, Order, OrderLeft, OrderList, OrderRight, Writings, } from './style'
import order from "../../../assets/order.png"
import { useParams } from 'react-router-dom';
import { ImageOfOffer } from '../motor/motorStyle';

const BASEURL = "http://localhost:5050/api/v1";


const Orders = () => {
  const { id } = useParams();
  const [dataByID, setDataByID] = useState("");

  useEffect(() => {
      const fetchMotor = async () => {
          try {
              const response = await fetch(`${BASEURL}/motors/${id}`);
              const motorData = await response.json();
              setDataByID(motorData);
          } catch (error) {
              console.error("Error fetching motor:", error);
              // Handle error gracefully, e.g., display an error message
          }
      };
      fetchMotor();
  }, [id]);
  return (
    <Order>
        <h1>My Orders</h1>
        <Linediv/>
        <OrderList>
            <OrderLeft>
            </OrderLeft>
            <ImageOfOffer/>

            <OrderRight>
                <Writings>
                <div>
                  <h1>{dataByID.name}</h1>
                  </div>
                  <div>
                    <h2>{dataByID.cost}$</h2>
                  </div>
                </Writings>
                <Writings>
                <div >
                        <h3>Location:</h3>
                        <p>{dataByID.location}</p>
                    </div>
                    <div>
                        <h3>Payment</h3>
                        <p>Credit card</p>
                    </div>
                </Writings>
            </OrderRight>
        </OrderList>
    </Order>
  )
}

export default Orders