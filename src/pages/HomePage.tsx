import React from "react";
import BouncingLetters from "../components/BouncingLetters";
import "./about-page.css";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="grainy w-screen h-screen">
        <svg className="h-0 w-0">
          <filter id="noiseFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.3"
              numOctaves="1"
              stitchTiles="stitch"
            />
          </filter>
        </svg>
          <BouncingLetters string="Nigel Lai" />
      </div>
    </div>
  );
};

export default HomePage;
