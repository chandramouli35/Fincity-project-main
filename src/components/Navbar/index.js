import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <h1 className="heading">Madelyn Torff</h1>
      <ul className="heading-items">
        <li className="li">
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li className="li">
          <Link to="/add-projects" className="link">
            projects
          </Link>
        </li>
        <li className="li">
          <Link to="/projects" className="link">
            Add
          </Link>
        </li>
        <li className="li">
          <Link to="/contactUs" className="link">
            ContactUs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
