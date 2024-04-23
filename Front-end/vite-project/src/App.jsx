import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HeaderPage from './Header'
import Footer from "./Component/Footer";
import HomePage from "./Component/Home";
import CartPage from "./Component/Cart";
import Aboutpage from './Component/About'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <header className="flex w-full  bg-blue-400 top-0 fixed">
            <nav className="flex text-3xl ml-4 ">
              <Link to="/">ቦኤዝ</Link>
              <div className="flex  ml-[600%] gap-11">
                <Link to="/Cartpage" className=" hover:bg-red-600">Cart</Link>
                <Link to="/Aboutpage">About</Link>
              </div>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Cartpage" element={<CartPage />} />
            <Route path="/Aboutpage" element={<Aboutpage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
