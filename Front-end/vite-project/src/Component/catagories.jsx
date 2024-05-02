import React from "react";
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-8">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        <Link to="/category1">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              className="w-full h-40 object-cover"
              src="category1.jpg"
              alt="Category 1"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Category 1</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/category2">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              className="w-full h-40 object-cover"
              src="category2.jpg"
              alt="Category 2"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Category 2</h2>
              <p className="text-gray-700">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/category3">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              className="w-full h-40 object-cover"
              src="category3.jpg"
              alt="Category 3"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Category 3</h2>
              <p className="text-gray-700">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/category4">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              className="w-full h-40 object-cover"
              src="category4.jpg"
              alt="Category 4"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Category 4</h2>
              <p className="text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesPage;