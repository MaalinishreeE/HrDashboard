import React from "react";
import { Chart } from "react-google-charts";
import constants from "./constants";

const ChartComponent=(props)=> {
  return (
    <div> 
      <div style={{fontSize:'25px',fontWeight:"bold"}}>{props.type === "Gauge"? "% of Offer Accepted":""}</div>
    <Chart
      chartType={props.type}
      style={{textAlign:"center"}}
      width="95%"
      height="500px"
      data={props.data}
      options={constants[props.option]}
    />
    </div>
  );
}

export default ChartComponent;