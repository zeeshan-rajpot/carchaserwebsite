import { Cross as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import Logo from '../../public/NavbarLogo.svg';
import "./Navbar.css";
import { Container } from "react-bootstrap";

const Navbar = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState(props.link);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
    
    <Container className="p-0  ">


    <nav className="mainnavbar">
      <div className="navContainer">
        <Link to="/Dashbord">
          <div className="logo">
            <img
              src="/Frame 68067.svg"
              style={{ width: "80%", height: "80%" }}
            />
          </div>
        </Link>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger
            direction="left"
            size={32}
            color="#FD9F00"
            duration={0.1}
          />
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul className="d-flex justify-content-end align-items-center ">
            <li>
              <NavLink
                to="/Dashbord"
                activeClassName="active"
                onClick={() => handleNavLinkClick("Dashbord")}
                style={{
                  color: activeLink === "Dashbord" ? "#FD9F00" : "#444444",
                }}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Add"
                activeClassName="active"
                onClick={() => handleNavLinkClick("Add")}
                style={{
                  color: activeLink === "Add" ? "#FD9F00" : "#444444",
                }}
              >
                Add
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Recent"
                activeClassName="active"
                onClick={() => handleNavLinkClick("Recent")}
                style={{
                  color: activeLink === "Recent" ? "#FD9F00" : "#444444",
                }}
              >
                Recent
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Previous"
                activeClassName="active"
                onClick={() => handleNavLinkClick("Previous")}
                style={{
                  color: activeLink === "Previous" ? "#FD9F00" : "#444444",
                }}
              >
                Pervious
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Chat"
                activeClassName="active"
                onClick={() => handleNavLinkClick("Chat")}
                style={{
                  color: activeLink === "Chat" ? "#FD9F00" : "#444444",
                }}
              >
                Chat
              </NavLink>
            </li>
            <li>
              <div className=" ">
             <Link to='/Notification'>   <img src="/Group 10249.svg" alt="" /></Link>
               
              </div>
            </li>

            <li className="shadow p-1 rounded-3  porange">
           
        
              
          <img src="/solar_phone-bold-duotone.svg" alt=""  />   090078601
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </Container>


    </>
  );
};

export default Navbar;
