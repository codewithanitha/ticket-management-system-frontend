import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎫 Ticket System</h2>

      <div className="links">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>

        <NavLink to="/tickets" className="nav-link">
          Tickets
        </NavLink>

        <NavLink to="/add" className="nav-link">
          Add Ticket
        </NavLink>

        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
