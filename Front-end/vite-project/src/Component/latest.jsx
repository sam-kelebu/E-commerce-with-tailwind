import React from "react";
import { Link } from "react-router-dom";

const LatestArrival = () => {
  return (
    <>
      <div className="container mx-auto mt-[10vh]">
        <h2 className="text-3xl font-bold text-center mt-8 mb-4">Latest Arrivals</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Link to="/product/1">
              <img className="w-full h-auto rounded" src="pp34.jpeg" alt="Product 1" />
            </Link>
          </div>
          <div>
            <Link to="/product/2">
              <img className="w-full h-auto rounded" src="pp36.jpeg" alt="Product 2" />
            </Link>
          </div>
          <div>
            <Link to="/product/3">
              <img className="w-full h-auto rounded" src="pp36.jpeg" alt="Product 3" />
            </Link>
          </div>
          <div>
            <Link to="/product/3">
              <img className="w-full h-auto rounded" src="pp36.jpeg" alt="Product 3" />
            </Link>
          </div>
          <div>
            <Link to="/product/3">
              <img className="w-full h-auto rounded" src="pp36.jpeg" alt="Product 3" />
            </Link>
          </div>
          <div>
            <Link to="/product/3">
              <img className="w-full h-auto rounded" src="pp36.jpeg" alt="Product 3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestArrival;
