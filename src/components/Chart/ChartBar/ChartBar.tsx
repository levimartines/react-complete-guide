import React, { CSSProperties } from "react";
import "./ChartBar.css"

const ChartBar: React.FC<{ value: number, maxValue: number, label: string }> = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round(props.value / props.maxValue * 100) + "%";
  }
  const chatBarCss: CSSProperties = { height: barFillHeight }

  return <div className="chart-bar">
    <div className="chart-bar__inner">
      <div className="chart-bar__fill" style={chatBarCss}/>
    </div>
    <div className="chart-bar__label">{props.label}</div>
  </div>
};

export default ChartBar;