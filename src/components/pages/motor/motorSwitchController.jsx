import React from "react";

import MotorHMenu from "./motorHMenu";
import MotorsVMenu from "./motorVMenu";

const MotorSwitchControl = ({ active }) => {
  return <>{active ?  <MotorHMenu /> : <MotorsVMenu/>}</>;
};

export default MotorSwitchControl;