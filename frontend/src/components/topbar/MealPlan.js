import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import FixedNav from '../components/topbar/Topbar';

import {
  RiNewspaperLine,
  RiRadarLine,
  RiBaseStationLine,
  RiFolderUserLine,
  RiLogoutBoxLine,
} from "react-icons/ri";

import styles from "./styles/NewsFeed.module.css";

function MealPlan() {
  let navigate = useNavigate();

  function handleClick(e) {
    navigate("/newsfeed/allaccounts");
  }

  function handleSignOut(e) {
    localStorage.removeItem("psnUserId");
    localStorage.removeItem("psnToken");
    localStorage.removeItem("psnUserFirstName");
    localStorage.removeItem("psnUserLastName");
    localStorage.removeItem("psnUserEmail");
    navigate("/");
  }

  useEffect(() => {
    if (localStorage.getItem("psnToken") === null) {
      navigate("/unauthorized");
    }
  });

  return (
    <Container className="pt-3">
       <FixedNav />
      <Row className="mb-3">
        <Col md={8}>
          <div className="mt-5 d-flex justify-content-end">
            <Button variant="primary" onClick={handleClick}>
              Find All User Accounts
            </Button>
          </div>
        </Col>
      </Row>
     {/**  <Row>
        <Col md={4}>
          <Navbar bg="light" expand="lg" className="mb-3 mb-sm-0">
            <Container className={styles.navbarContainer}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className={styles.navContainer}>
                <ul className="list-group">
                <Nav.Link>
                  <Link to="" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 text-primary shadow">
                      <span>
                        {" "}
                        <RiNewspaperLine /> Newsfeed
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="following" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 text-primary shadow">
                      <span>
                        <RiRadarLine /> Following
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="follower" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 text-primary shadow">
                      <span>
                        <RiBaseStationLine /> Followers
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="myprofile" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 text-primary shadow">
                      <span>
                        <RiFolderUserLine /> My Posts
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="myprofile" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 text-primary shadow">
                      <span>
                        <RiFolderUserLine /> Status Share
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="mealPlan" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 text-primary shadow">
                      <span>
                        <RiFolderUserLine /> Meal Plan
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="myprofile" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 text-primary shadow">
                      <span>
                        <RiFolderUserLine /> Workout Plan
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <li
                    className={`list-group-item fs-5 py-3 text-primary shadow ${styles.signOutButton}`}
                    onClick={handleSignOut}
                  >
                    <span>
                      <RiLogoutBoxLine /> Sign Out
                    </span>
                  </li>
                </Nav.Link>
                </ul>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col md={8}>
          <Outlet />{" "}
        </Col>
      </Row>*/}
    </Container>
  );
}

export default MealPlan;
