import React from "react";
import "./ChartContainer.css";
import ChartBar from "../ChartBar/ChartBar";

type ChartData = {
  data: { value: number; label: string }[]
}

const ChartContainer: React.FC<ChartData> = (props) => {
  const dataValues = props.data.map(data => data.value);
  const maxValue = Math.max(...dataValues);

  return <div className="chart">
    {props.data.map(dataPoint =>
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={maxValue}
        label={dataPoint.label}/>
    )}
  </div>

}

export default ChartContainer;