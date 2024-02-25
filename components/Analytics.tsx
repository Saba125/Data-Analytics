import React from "react";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src="/laptop.jpg"
          alt="laptop"
        />
        <div className="text-black flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl font-bold py-2">
            Manage Data Analytics Centrall
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            debitis ab iure exercitationem neque voluptatibus sunt rerum quia.
            Nostrum dignissimos dolor odit, inventore quia sapiente distinctio.
            Odio illo facilis rem.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6  px-6 py-3 text-black">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
