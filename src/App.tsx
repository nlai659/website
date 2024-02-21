import { Outlet, Link } from "react-router-dom";
import "./app.css";
import BouncingLetters from "./components/BouncingLetters";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="grainy">
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

export default App;
