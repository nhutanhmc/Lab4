import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { UserAuth } from "../context/AuthContext";
import { ThemeContext } from "./ThemeContext";

export default function Navigation() {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  }

  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div>
      <nav
        className="navbar navbar-expand-sm fixed-top"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Link
              to={"/home"}
              style={{ color: theme.color, textDecoration: "none" }}
            >
              Xavia
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  <span className="fa fa-home fa-lg"></span>
                  <Link
                    to={"/home"}
                    style={{ color: theme.color, textDecoration: "none" }}
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
                    style={{ color: theme.color, textDecoration: "none" }}
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
                    style={{ color: theme.color, textDecoration: "none" }}
                  >
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
            <a href="#" onClick={toggle}>
              <LightbulbIcon
                style={{ color: theme.color, textDecoration: "none" }}
              />
            </a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button className="btn btn-outline-success">
              <Link
                to={"/add"}
                style={{ color: theme.color, textDecoration: "none" }}
              >
                Create
              </Link>
            </button>
            <div className="user-name">
              {user?.displayName && (
                <Typography sx={{ color: "black" }}>{user.displayName}</Typography>
              )}
            </div>
            <div className="button-log">
              <ButtonGroup>
                {user?.displayName ? (
                  <Button onClick={handleSignOut}>Log Out</Button>
                ) : (
                  <Button sx={{ marginLeft: "10rem" }}>
                    <Link to="/loginpage" style={{ textDecoration: "none" }}>
                      Log In
                    </Link>
                  </Button>
                )}
              </ButtonGroup>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
