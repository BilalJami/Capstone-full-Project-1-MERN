import "./main.css";
import { Link, NavLink } from "react-router-dom";

function Main() {
  const isLogedIn = localStorage.getItem("token");
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (<>
    {isLogedIn && (
    <div className="main_container">
      <nav className="navbar">
        <h1>Happy Tours</h1>
        <ul className="menu-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/media-gallery">Media Gallary</Link>
          </li>
          <li>
            <Link to="/faq">FAQ's</Link> 
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
        <button className="white_btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>)}</>
  );
}

export default Main;
