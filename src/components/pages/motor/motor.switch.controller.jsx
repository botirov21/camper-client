import React from "react";
import MotorVMenu from "./motorVMenu";
import MotorHMenu from "./motorHMenu";



const MotorSwitchControl= ({ active }) => {
  return <>{active ?  <MotorVMenu/> : <MotorHMenu/> }</>;
};

export default MotorSwitchControl;