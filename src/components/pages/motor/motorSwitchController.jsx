import React from "react";

import CaravanHMenu from "./motorHMenu";
import CaravanVMenu from "./motorVMenu";

const CarvanSwitchControl = ({ active }) => {
  return <>{active ?  <CaravanVMenu /> : <CaravanHMenu/>}</>;
};

export default CarvanSwitchControl;