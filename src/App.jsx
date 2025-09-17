import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { FaShower, FaSprayCan, FaTools, FaBroom } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import Autoplay module
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Car from "./Car";
const App = () => {
  const [isLoading, setisLoading] = useState(true);

  const nav = useNavigate();

  const features = [
    {
      icon: <img src="metrial.png" alt="" className="img-fluid" width={100} />,
      title: "Contactless Washing",
      text: "Safe and quick washing without any physical contact.",
    },
    {
      icon: (
        <img src="car-painting.png" alt="" className="img-fluid" width={100} />
      ),
      title: "Safety Materials",
      text: "Eco-friendly cleaning solutions for your vehicle.",
    },
    {
      icon: <img src="car-wash.png" alt="" className="img-fluid" width={100} />,
      title: "Modern Equipment",
      text: "Latest technology for efficient car cleaning.",
    },
    {
      icon: (
        <img src="upholstery.png" alt="" className="img-fluid" width={100} />
      ),
      title: "Extensive Cleaning",
      text: "Thorough cleaning for every part of your vehicle.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration (ms)
      once: false, // whether animation should happen only once
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
            className=" fw-bold text-center display-2 loading-title"
            data-aos="zoom-in"
            style={{ color: "rgba(55, 143, 194, 0.85)" }}
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
        <Navbar />

        {/* <div className="container-fluid mb-5 mt-2">
          <Carousel />
        </div> */}

        <div className="container-fluid car-banner ">
          <div>
            <h1>Premium Car & Bike Wash</h1>
            <p className="d-flex flex-column px-3 py-3 align-items-center">
              <button
                className="btn-book w-50"
                onClick={() => {
                  nav("car~");
                }}
              >
                Book Now
              </button>
              <p className="mt-2 fs-5">
                Because a clean car isn’t just about looks — it’s about
                confidence, care, and driving with pride.
              </p>
            </p>
          </div>
        </div>

        <div
          className="container py-5 px-4 px-md-0"
          style={{ overflow: "hidden" }}
        >
          <div className="row text-center">
            {features.map((feature, index) => {
              // set AOS animation based on index
              let aosEffect = "";
              if (index === 1) aosEffect = "fade-left";
              else if (index === 2) aosEffect = "fade-up";
              else aosEffect = "fade-right"; // default

              return (
                <div
                  key={index}
                  className="col-md-6 col-lg-3 mb-4"
                  data-aos={aosEffect}
                  data-aos-duration="2500"
                >
                  <div
                    className="glass-card p-4 text-white rounded-3 h-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(55, 143, 194, 0.85), rgba(10, 40, 80, 0.85))",
                    }}
                  >
                    <div className="mb-3 fs-1">{feature.icon}</div>
                    <h5>{feature.title}</h5>
                    <p className="mb-0">{feature.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container-fluid  mt-5" style={{ overflow: "hidden " }}>
          <div className="row flex-row-reverse">
            <div
              className="col-12 col-md-6  d-flex justify-content-center align-items-center"
              style={{ background: "black" }}
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="about-car.png" alt="Car 1" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="car-blue.png" alt="Car 2" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="blue-bg.png" alt="Car 3" className="img-fluid" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-12 text-white about-us py-4 col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h2
                className="about-h1"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                About Our Company
              </h2>

              <p data-aos="fade-up" data-aos-delay="100">
                We’re a professional Car & Bike Wash team delivering a showroom
                shine.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                From foam wash to detailing, we treat every vehicle with care.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                Our experts use modern tools and eco-friendly products for safe
                cleaning.
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                Fast service, flexible slots, and complete customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-5" style={{ overflow: "hidden" }}>
          <div className="row d-flex justify-content-center justify-content-md-around g-4">
            {/* Car Card */}
            <div className="col-12 col-md-5" data-aos="fade-right">
              <div
                className="carbike d-flex justify-content-between align-items-center p-4 shadow rounded-4 h-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(55, 143, 194, 0.85), rgba(10, 40, 80, 0.85))",
                }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center text-start">
                  <h2 className="fw-bold text-white text-center mb-3">
                    Car Details
                  </h2>
                  <button
                    className="details-btn"
                    onClick={() => {
                      nav("/car");
                    }}
                  >
                    Details
                  </button>
                </div>
                <div>
                  <img
                    src="blue-bg.png"
                    alt="Car"
                    className="img-fluid"
                    width={280}
                  />
                </div>
              </div>
            </div>

            {/* Bike Card */}
            <div className="col-12 col-md-5" data-aos="fade-left">
              <div
                className="carbike d-flex justify-content-between align-items-center p-4 shadow rounded-4 h-100 flex-md-row "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(55, 143, 194, 0.85), rgba(10, 40, 80, 0.85))",
                }}
              >
                <div>
                  <img
                    src="bike-removebg-preview.png"
                    alt="Bike"
                    className="img-fluid"
                    width={200}
                  />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center text-start ms-md-4">
                  <h2 className="fw-bold text-white mb-3 text-center">
                    Bike Details
                  </h2>
                  <button
                    className="details-btn"
                    onClick={() => {
                      nav("/bike");
                    }}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
        <div
          className="container-fluid car-background"
          style={{ overflow: "hidden" }}
        >
          <div className="row d-flex  align-items-center py-3">
            <div className="col-md-6 mt-4 col-12 text-white">
              <h1 className="title" data-aos="zoom-out">
                Premium Car & Bike Wash
              </h1>
              <p className="desc" data-aos="zoom-in">
                Experience the shine your ride deserves – trusted care for every
                detail. Our professional team uses advanced techniques and
                high-quality products to give your car and bike a spotless
                finish that lasts.
              </p>
              <p className="desc" data-aos="zoom-out">
                From exterior hand wash to deep interior detailing, we ensure
                every corner of your vehicle feels brand new. With eco-friendly
                cleaning solutions, soft-touch technology, and expert finishing,
                your ride gets the treatment it truly deserves.
              </p>
              <p className="desc" data-aos="zoom-in">
                Drive with confidence, style, and pride – because your car or
                bike is more than just a vehicle, it’s your lifestyle.
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn-book">Book Now</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* </div>  */}
    </>
  );
};

export default App;
