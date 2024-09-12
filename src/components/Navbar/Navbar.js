import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/search" className="navbar-link">Search</Link>
        </li>
        <li className="navbar-item">
          <Link to="/news" className="navbar-link">News</Link>
        </li>
        <li className="navbar-item">
          <Link to="/profile" className="navbar-link">Recuriter-Profile</Link>
        </li>
        <li className="navbar-item">
          <Link to="/viewpost" className="navbar-link">Post</Link>
        </li>
        <li className="navbar-item">
          <Link to="/userprofile" className="navbar-link">My-Profile</Link>
        </li>
        <li className="navbar-item">
          <Link to="/setting" className="navbar-link">Setting</Link>
        </li>
      </ul>
    </div>
    
  )
}

export default Navbar