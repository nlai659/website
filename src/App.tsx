import { Outlet, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="bg-bg-primary">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
