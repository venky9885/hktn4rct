import React, { useState, useEffect } from "react";
import "./CircularProgressBar.css"; // Import the CSS file for styling

const CircularProgressBar = ({ percentage, width }) => {
  const [offset, setOffset] = useState(0);
  const circumference = 2 * Math.PI * (width / 2 - 5); // Circumference of a circle with radius 20
  const progress = (percentage / 100) * circumference;
  const dashOffset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    const progress = percentage / 100;
    const circleOffset = 100 - progress * 100;
    setOffset(circleOffset);
  }, [percentage]);

  return (
    <svg className="circular-progress-bar" width={width} height={width}>
      <circle
        className="progress-bar-background"
        r={width / 2 - 5}
        cx={width / 2}
        cy={width / 2}
      />
      <circle
        className="progress-bar"
        r={width / 2 - 5}
        cx={width / 2}
        cy={width / 2}
        style={{
          strokeDasharray: `${progress} ${circumference}`,
          stroke: progress === 0 && "#e0e0e0",
        }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.3em"
        className="progress-text">
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
