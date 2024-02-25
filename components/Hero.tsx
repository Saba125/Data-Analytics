"use client";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex text-center flex-col justify-center">
        <p className="text-[#00df9a] p-2 font-bold">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl md:py-6 text-4xl">
          Grow with data.
        </h1>
        <div className="flex flex-row justify-center gap-3 items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for{" "}
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="mt-4 md:text-2xl text-xl font-bold text-gray-600">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
