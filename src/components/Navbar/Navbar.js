import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
      </ul>
    </div>
    
  )
}

export default Navbar