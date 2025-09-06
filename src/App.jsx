import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Button, Offcanvas } from "react-bootstrap";
const App = () => {
  const [isLoading, setisLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration (ms)
      once: true, // whether animation should happen only once
    });
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 2000);

    // cleanup when component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="position-relative  min-vh-100 d-flex flex-column justify-content-center align-items-center overflow-hidden">
        {/* Background Video */}
        <img
          src="car.png"
          width={300}
          height={300}
          alt=""
          className="img-fluid"
          data-aos="zoom-out"
        />

        {/* Overlay Content */}
        <div className="d-flex justify-content-center align-items-center ">
          <h1
            className="text-dark fw-bold text-center display-2 loading-title"
            data-aos="zoom-in"
          >
            Welcome GEM Car Wash
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="body">
        <div className="container-fluid video-container ">
          {/* desktop mood */}
          <div className="d-md-flex justify-content-between align-items-center d-none ">
            <img
              src="logos-removebg-preview.png"
              width={200}
              alt=""
              className="img-fluid"
            />
            <ul className="list-unstyled d-flex jusitfy-content-between nav-list align-items-center gap-5 fw-bold ">
              <li>Home</li>
              <li>Services</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
            <button className="contact-btn rounded ">Contact</button>
          </div>

          {/*  */}
          {/* This button will only show on small screens */}
          <div className="row py-2 d-md-none ">
            <div className="col-12 d-flex justify-content-between fixed-top py-3 bg-white  align-items-center">
              <h1 className="display-4" data-aos="fade-left">
                GEM CAR WASH
              </h1>
              <Button
                className="d-md-none bg-white border-0"
                onClick={handleShow}
              >
                <img
                  src="hamburger.png"
                  width={30}
                  alt=""
                  className="img-fluid"
                />
              </Button>

              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="start" // left side
                className="d-md-none
          " // hide on md and above
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </div>

            <div className="col-12 mt-5 py-3">
              <img
                src="logos-removebg-preview.png"
                alt=""
                data-aos="zoom-in"
                className="img-fluid mt-5"
              />
            </div>
          </div>
        </div>

        <div
          className="container-fluid car-background "
          style={{ overflow: "hidden" }}
        >
          <div className="row d-flex  align-items-center ">
            <div className="col-md-6 mt-4 col-12 text-white">
              <h1 className="title">Premium Car & Bike Wash</h1>
              <p className="desc">
                Experience the shine your ride deserves – trusted care for every
                detail. Our professional team uses advanced techniques and
                high-quality products to give your car and bike a spotless
                finish that lasts.
              </p>
              <p className="desc">
                From exterior hand wash to deep interior detailing, we ensure
                every corner of your vehicle feels brand new. With eco-friendly
                cleaning solutions, soft-touch technology, and expert finishing,
                your ride gets the treatment it truly deserves.
              </p>
              <p className="desc">
                Drive with confidence, style, and pride – because your car or
                bike is more than just a vehicle, it’s your lifestyle.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn-book">Book Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-around align-items-center">
              <img width={300} src="car1.png" alt="" className="img-fluid" />
              <div className="d-flex align-items-center flex-column">
                <h1>Car Details</h1>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-around align-items-center">
              <img
                width={200}
                src="bike-removebg-preview.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
