import React from "react";


import TuningVMenu from "./tuningVMenu";
import TuningHMenu from "./tuningHMemu";

const TuningSwitchControl = ({ active }) => {
  return <>{active ?  <TuningVMenu/> : <TuningHMenu/> }</>;
};

export default TuningSwitchControl;