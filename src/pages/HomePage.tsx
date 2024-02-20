import React from "react";
import "./styles/bg.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <svg className="h-0 w-0">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <h1>Welcome to the HomePage!</h1>
      <p>This is the main page of your application.</p>
    </div>
  );
};

export default HomePage;
