import React from "react";
import { NavLink } from "react-router-dom";
import "./index1.css";
import "font-awesome/css/font-awesome.min.css"; // Ensure Font Awesome is imported
import brandinglogo from "../../assets/branding-logo-head-gray.png";

const Sidebar = ({ children }) => {
  const menuItems = [
    { path: "/audience", name: "Audience", icon: "audience.svg" },
    { path: "/search", name: "Search", icon: "search.svg" },
    { path: "/conversation", name: "Conversation", icon: "message.svg" },
    { path: "/ai", name: "AI", icon: "stars.svg" },
  ];
  const menuItems2 = [
    { path: "/info", name: "Info", icon: "info.svg" },
    { path: "/profile", name: "Profile", icon: "profile.svg" },
    { path: "/settings", name: "Settings", icon: "dots.svg" },
  ];

  return (
    <div className="container">
      <div style={{ width: "100px" }} className="sidebar">
        <div className="top_section">
          <img src={brandinglogo} style={{ height: "2.5rem", width: "auto" }}></img>
        </div>
        <hr></hr>
        <div className="middle_section">
          <div className="menu">
            {menuItems.map((item, index) => (
              <NavLink
                to={item.path}
                className="link"
                key={index}
                activeclassname="active"
              >
                <div className="icon-with-tooltip">
                  <img src={item.icon} alt={item.name} width="24" height="24" />
                  <span className="tooltip">{item.name}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="bottom_section">
          <div className="menu">
            {menuItems2.map((item, index) => (
              <NavLink
                to={item.path}
                className="link"
                key={index}
                activeclassname="active"
              >
                <div className="icon-with-tooltip">
                  <img src={item.icon} alt={item.name} width="30" height="30" />
                  <span className="tooltip">{item.name}</span>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};



export default Sidebar;