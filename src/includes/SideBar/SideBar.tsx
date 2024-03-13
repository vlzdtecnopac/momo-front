import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SideBar.scss";
import axios from "axios";

function SideBar() {
  const navigate = useNavigate();

  const location = useLocation();

  const handleNavegation = (nav: string) => navigate(nav);

  const sidebarListNav = [
    { icon: "orders-icon", name: "orders", router: "/dashboard" },
    { icon: "inventory-icon", name: "inventory", router: "/inventory-page" },
    { icon: "alert-icon", name: "alert", router: "/alerts-page" },
    { icon: "config-icon", name: "config", router: "/config-page" },
  ];

  const handleLogout = async () => {
      localStorage.removeItem("employee-id");
      localStorage.removeItem("token-momo");
      navigate("/");
  };

  return (
    <>
      <ul className="options__menu">
        {sidebarListNav.map((item, index) => (
          <li
            className={`option ${
              location.pathname == item.router ? "active" : ""
            }`}
            key={index}
            onClick={() => handleNavegation(item.router)}
          >
            <i
              className={`icon ${
                location.pathname === item.router ? "active" : ""
              } ${item.icon}`}
            ></i>
          </li>
        ))}
      </ul>
      <button onClick={() => handleLogout()} className="logout">
        <i className="logout-icon"></i>
      </button>
    </>
  );
}

export default SideBar;
