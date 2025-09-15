import React from "react";
import Navbar from "./Navbar";

const Car = () => {
  const font = {
    fontFamily: "'Poppins', sans-serif",
  };
  {
    /* Animation keyframes */
  }
  <style>
    {`
     @keyframes moveGradient {
       0% { transform: translate(-50%, -50%); }
       100% { transform: translate(0%, 0%); }
     }
     ul:hover {
       transform: scale(1.05);
     }
   `}
  </style>;

  return (
    <>
      <div style={{ font, backgroundColor: " rgb(55, 143, 194)" }}>
        <Navbar />
        <div className="container-fluid mt-2 mt-md-5">
          <div className="row p-3 g-4">
            <div className="col-12 col-sm-6">
              <div
                style={{
                  borderRadius: "20px",
                  padding: "20px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 8px 10px rgba(0, 0, 0, 0.3)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Glass animated background */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "200%",
                    height: "200%",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                    animation: "moveGradient 6s infinite linear",
                    zIndex: 0,
                  }}
                ></div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <h1 className="text-center text-uppercase fs-3 text-dark mb-3">
                    4 Seat Car Wash Price
                  </h1>

                  <div className="d-flex flex-column justify-content-around align-items-center">
                    <img
                      src="redcar.png"
                      alt="Car"
                      width={350}
                      className="img-fluid mb-3"
                    />

                    <section className="text-center">
                      <h2 style={{ color: "black", fontWeight: "600" }}>
                        Car Service ₹350 Only
                      </h2>
                      <ul
                        style={{
                          listStyle: "none",
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          padding: "12px 20px",
                          borderRadius: "16px",
                          background: "rgba(255, 255, 255, 0.15)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                          color: "black",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: "500",
                          gap: "20px",
                          marginTop: "15px",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <li>Home Wash</li>
                        <li>Interior Vacuum</li>
                        <li>Tire Polish</li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div
                style={{
                  borderRadius: "20px",
                  padding: "20px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 8px 10px rgba(0, 0, 0, 0.3)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Glass animated background */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "200%",
                    height: "200%",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                    animation: "moveGradient 6s infinite linear",
                    zIndex: 0,
                  }}
                ></div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <h1 className="text-center text-uppercase fs-3 text-dark mb-3">
                    4 Seat Car Wash Price
                  </h1>

                  <div className="d-flex flex-column justify-content-around align-items-center">
                    <img
                      src="redcar.png"
                      alt="Car"
                      width={350}
                      className="img-fluid mb-3"
                    />

                    <section className="text-center">
                      <h2 style={{ color: "black", fontWeight: "600" }}>
                        Car Service ₹350 Only
                      </h2>
                      <ul
                        style={{
                          listStyle: "none",
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          padding: "12px 20px",
                          borderRadius: "16px",
                          background: "rgba(255, 255, 255, 0.15)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                          color: "black",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: "500",
                          gap: "20px",
                          marginTop: "15px",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <li>Home Wash</li>
                        <li>Interior Vacuum</li>
                        <li>Tire Polish</li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Car;
