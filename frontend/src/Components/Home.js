
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BinCard from "./BinCard";
import Maps from "./Maps";
import Footer from "./Footer";

const Home = () => {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <>
        <div className="relative h-screen overflow-hidden">
          <Navbar />

          <div
            className={`absolute inset-0 flex justify-center items-center ${
              showVideo
                ? "bg-transparent"
                : "bg-navy transition-colors duration-1000"
            }`}
          >
            <div className="flex flex-col font-new-amsterdam font-normal items-center justify-center relative text-white text-5xl z-[5] animate-floatUp">
              <h2>Smart Dustbin System For</h2>
              <h1>Waste Management</h1>
            </div>
            {showVideo && (
              <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
              >
                <source src="/vedio4.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>

        <div className="block">
          <div className="grid grid-cols-2 gap-8 p-8 bg-custom_gray">
            <div>
              <h1 className="text-teal-600 text-[1.2rem] font-bold uppercase">
                About Us
              </h1>
              <p className="text-4xl font-light text-gray-900 leading-snug mt-4">
                We create Smart bins with AI-driven sensors for efficient waste
                management and optimization.
              </p>
            </div>

            <div className="flex items-center">
              <p className="text-lg text-gray-700">
                <br />
                Whether you're overseeing a city's waste management, running a
                business, or handling waste collection, our smart dustbin
                solutions leverage sensors, live analytics, and machine learning
                to tackle overflow issues and streamline collection, boosting
                efficiency and sustainability.
                <br /> <br /> <br /> 
                By integrating machine learning, our system continually improves
                its predictions and recommendations, further enhancing
                operational efficiency. Embrace a smarter, more sustainable
                approach to waste management with our innovative solutions,
                ensuring cleaner environments and reduced operational costs.
              </p>
            </div>
          </div>
        </div>

        <BinCard />

        <Maps />

        <Footer />
      </>
    );
}

export default Home;
