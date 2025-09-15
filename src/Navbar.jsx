import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

import "aos/dist/aos.css";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const nav = useNavigate();

  return (
    <div className="container-fluid video-container">
      {/* desktop mood */}
      <div className="d-md-flex justify-content-between align-items-center d-none ">
        <img
          src="logos-removebg-preview.png"
          width={200}
          alt=""
          className="img-fluid"
        />
        <ul className="list-unstyled d-flex jusitfy-content-between nav-list align-items-center gap-5 fw-bold ">
          <li
            onClick={() => {
              nav("/");
            }}
          >
            Home
          </li>
          <li>Services</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <button className="contact-btn rounded ">Contact</button>
      </div>

      {/*  */}
      {/* This button will only show on small screens */}
      <div className="row py-2 d-md-none ">
        <div className="col-12 shadow d-flex justify-content-between fixed-top py-3 bg-white  align-items-center">
          <h1 className="display-4" data-aos="fade-left">
            GEM CAR WASH
          </h1>
          <Button className="d-md-none bg-white border-0" onClick={handleShow}>
            <img src="hamburger.png" width={30} alt="" className="img-fluid" />
          </Button>

          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="start" // left side
            className="d-md-none
          " // hide on md and above
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{ fontStyle: "'Poppins', sans-serif" }}>
                Gem Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="list-unstyled fs-2 d-flex flex-column gap-3">
                <li
                  className="d-flex align-items-center gap-2"
                  onClick={() => {
                    nav("/");
                  }}
                >
                  {" "}
                  <img width={30} src="charging-station.png" alt="" /> Home
                </li>

                <li className="d-flex align-items-center gap-2">
                  {" "}
                  <img width={30} src="mechanic.png" alt="" /> Service
                </li>
                <li className="d-flex align-items-center gap-2">
                  {" "}
                  <img width={30} src="operator.png" alt="" /> Contact
                </li>
                <li className="d-flex align-items-center gap-2">
                  {" "}
                  <img width={30} src="info.png" alt="" /> About
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className="col-12 mt-5 py-3">
          {/* <img
            src="logos-removebg-preview.png"
            alt=""
            data-aos="zoom-in"
            className="img-fluid mt-5"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
