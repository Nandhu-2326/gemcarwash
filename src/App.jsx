import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration (ms)
      once: true, // whether animation should happen only once
    });
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, 1500);

    // cleanup when component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="position-relative  min-vh-100 d-flex flex-column justify-content-center align-items-center overflow-hidden">
        {/* Background Video */}
        <img
          src="car.png"
          width={100}
          height={100}
          alt=""
          className="img-fluid"
          data-aos="zoom-out"
        />

        {/* Overlay Content */}
        <div className="d-flex justify-content-center align-items-center ">
          <h1
            className="text-dark fw-bold text-center display-3"
            data-aos="zoom-in"
          >
            Welcome GEM Service
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container"></div>
    </>
  );
};

export default App;
