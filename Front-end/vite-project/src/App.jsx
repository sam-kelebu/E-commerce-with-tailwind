import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HeaderPage from './Header'
import Footer from "./Component/Footer";
import CatagoriesPage from "./Component/catagories"
import HomePage from "./Component/Home";
import CartPage from "./Component/Cart";
import AboutPage from "./Component/About";
import ProductPage from "./Component/product";
const App = () => {
  return (
    <>
      <Router>
        <div>
          {/* <header className="flex w-full  bg-blue-400 top-0 fixed">
            <nav className="flex text-3xl ml-4 sm:w-full">
              <Link to="/">ቦኤዝ</Link>
              <div className="flex  ml-[600%] gap-11">
                <Link to="/Cartpage" className=" hover:bg-red-600">Cart</Link>
                <Link to="/AboutPage">About</Link>
              </div>
            </nav>

          </header> */}
          <header className="flex w-full bg-blue-400 top-0 fixed flex-wrap">
            <nav className="flex items-center justify-between w-full px-4 py-2">
              <div className="flex items-center">
                <Link to="/" className="text-3xl mr-4">
                  ቦኤዝ
                </Link>
              </div>
              <div className="flex items-center">
                <Link to="/Cartpage" className="ml-4 hover:bg-tex-3xl text-2xl ">
                  Cart
                </Link>
                <Link to="/AboutPage" className="ml-4 text-2xl ">
                  About
                </Link>
              </div>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Cartpage" element={<CartPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ProductPage" element={<ProductPage />} />
            <Route path="/catagories" element={<CatagoriesPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
