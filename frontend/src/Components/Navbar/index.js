import React, { useState } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavDropdown,
  DropdownMenu,
} from "./NavbarElements";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Nav>
        <NavMenu>
          <div className="flex-container">
            <NavLink to="/home">Home</NavLink>
            <NavDropdown onClick={toggleDropdown} active={dropdownOpen ? 1:0}>
              Courses
              <DropdownMenu visible={dropdownOpen ? 1:0}>
                <NavLink to="/basic">Basic</NavLink>
              </DropdownMenu>
            </NavDropdown>
            <NavLink to="/learningpath">Start Learning</NavLink>
            <NavLink to="/chat">Chat</NavLink>
          </div>
        </NavMenu>
        <div className="flex-container">
          <Link to="/profile">
            <button id="login-btn">Profile</button>
          </Link>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
