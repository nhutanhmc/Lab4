import React, { useState, Component } from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { colors } from "@mui/material";
import { Link } from "react-router-dom";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Icon from "@mui/material/Icon";
// Thêm dòng import cho useContext

export default function Navigation() {
  const [player, setPlayer] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const hidePopup = () => {
    setShowPopup(false);

    if (!showPopup) window.location.href = "/#";
  };

  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm fixed-top"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Link
              to={"/home"}
              style={{ color: theme.color, textDecoration: `none` }}
            >
              Xavia
            </Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  <span className="fa fa-home fa-lg"></span>
                  <Link
                    to={"/home"}
                    style={{ color: theme.color, textDecoration: `none` }}
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  <span className="fa fa-info fa-lg"></span>
                  <Link
                    to={"/info"}
                    style={{ color: theme.color, textDecoration: `none` }}
                  >
                    Info
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  <span className="fa fa-address-card fa-lg"></span>
                  <Link
                    to={"/contact"}
                    style={{ color: theme.color, textDecoration: `none` }}
                  >
                    Contact
                  </Link>
                </a>
              </li>
              
            </ul>
            <a href="#" onClick={toggle}>
                  <LightbulbIcon
                    style={{ color: theme.color, textDecoration: `none` }}
                  />
                </a>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button
              onClick={() => {
                setPlayer(player);
                setShowPopup(true);
              }}
              class="btn btn-outline-success"
            >
              <Link
                    to={"/add"}
                    style={{ color: theme.color, textDecoration: `none` }}
                  >
                    Create
                  </Link>
            </button>
            <a href="#"></a>
          </div>
        </div>
      </nav>

      
    </div>
  );
}
