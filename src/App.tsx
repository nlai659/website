import { Outlet, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div className="">
      <HomePage />
      <AboutPage />
    </div>
  );
};

export default App;
