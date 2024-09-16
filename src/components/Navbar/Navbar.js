import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <div>
    <div className="navbar">
      <div className="logo"> 
        <b><i>Hire-Me</i></b>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/signup" className="navbar-link">Sign Up</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
      </ul>
    </div>
    <div class="side_bar" id="side-bar">
    <Link to="/" className="navbar-link">Home</Link>
    <Link to="/signup" className="navbar-link">Sign-up</Link>
    <Link to="/login" className="navbar-link">Login</Link>
    </div>
    </div>
  )
}

export default Navbar