import React, { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import LandingPage from "../Display/LandingPage";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import "../Styles/Navbar.css";
export default function PlayerNavbar({ searchFilter, setSearchResult }) {
  // const [searchSongName, setSearchSongName] = useState("");
  // const [searchSinger, setSearchSinger] = useState("");

  //  const [search, setSearch] = useState("");

  // const searchFilter = useMemo(() => {
  //   if (!search) {
  //     return songData;
  //   }
  //   return songData.filter(
  //     (item) => {
  //       return (
  //         // !searchSinger ? true : item.singer.toLowerCase().includes(searchSinger.toLowerCase()) &&
  //         //   !searchSongName?true: item.name.toLowerCase().includes(searchSongName.toLowerCase())

  //         !search
  //           ? true
  //           : item.singer.toLowerCase().includes(search.toLowerCase()) ||
  //               item.name.toLowerCase().includes(search.toLowerCase())
  //       );
  //     },
  //     [search]
  //   );
  // });

  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className=""
        style={{ backgroundColor: "#332D2D", color: "white" }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Music-Player
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ width: "80%" }}>
              <Link
                to="/"
                style={{ color: "white", fontFamily: "initial" }}
                className="me-2 mt-2"
              >
                HOME
              </Link>
              <Link
                to="/"
                style={{ color: "white", fontFamily: "initial" }}
                className="me-2 mt-2"
              >
                PODCASTS
              </Link>
              <NavDropdown
                title={
                  <span style={{ color: "white", fontFamily: "initial" }}>
                    LIBRARY
                  </span>
                }
                id="collapsible-nav-dropdown"
                style={{ color: "white", fontFamily: "initial" }}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  style={{ color: "white", backgroundColor: "#332D2D" }}
                >
                  Music
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  style={{ color: "white", backgroundColor: "#332D2D" }}
                >
                  Podcasts
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="" style={{ width: "50%" }}>
              <div
                className="d-flex"
                style={{ width: "100%", display: "flex", marginLeft: "80px" }}
              >
                <div
                  style={{
                    width: "80%",
                    borderRadius: "40px",

                    padding: "3px",

                    border: "1px solid #332D2D",
                    backgroundColor: "white",
                  }}
                >
                  <input
                    className="searchInput"
                    type="text"
                    value={search}
                    placeholder="Search Songs"
                    style={
                      !search
                        ? {
                            border: "none",
                            width: "85%",
                            padding: "2px",
                            textAlign: "left",
                            fontFamily: "initial",
                          }
                        : {
                            marginLeft: "2px",
                            padding: "2px",
                            border: "none",
                            fontFamily: "initial",
                          }
                    }
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {search ? (
                    <button
                      style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "white",
                        border: "none",
                      }}
                      onClick={() => (setSearchResult(""), setSearch(""))}
                    >
                      <ClearIcon style={{ color: "black" }} />
                    </button>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <button
                    className="d-flex ms-2"
                    variant="none"
                    onClick={() => setSearchResult(search)}
                    style={{
                      width: "80px",
                      color: "white",
                      fontFamily: "initial",
                      fontSize: "15px",

                      marginTop: "5px",
                      backgroundColor: "#332D2D",
                    }}
                  >
                    <SearchIcon
                      titleAccess="Search"
                      style={{ fontSize: "20px" }}
                    />{" "}
                    Search
                  </button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
