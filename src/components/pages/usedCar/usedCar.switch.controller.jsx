import React from "react";


import UsedCarVMenu from "./usedCarVMenu";
import UsedCarHMenu from "./usedCarHMenu";

const UsedCarSwitchControl = ({ active }) => {
  return <>{active ?  <UsedCarVMenu/> : <UsedCarHMenu/> }</>;
};

export default UsedCarSwitchControl;