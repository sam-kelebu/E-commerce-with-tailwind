import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="">
        <img className="w-full h-[60vh]" src="pp11.jpeg" alt="" />
      </div>
      <div className="flex-col mx-auto">
        <h2 className="flex mx-auto items-center justify-center hover:underline text-3xl">
          Catagories
        </h2>
        <p className="flex font-mono mx-auto items-center justify-center py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing Numquam <br />{" "}
          &ensp; &ensp; esse possimus optio quidem obcaecati vitae elit.
          <br />
          impedit placeat veniam laboriosam quisquam magni commodi atque. Ipsa.
        </p>
        <Link to="/catagories">
          <button className="flex mx-auto justify-center items-center text-2xl bg-blue-400 ">
            Button
          </button>
        </Link>
      </div>
      <br />

      <div className="flex mx-auto justify-center items-center gap-8">
        <div className="flex">
          <Link to="/catagories">
            <img className="w-[20vh] " src="pp1.jpeg" alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/catagories">
            <img className="w-[10vh h-[30vh] " src="pp9.jpeg" alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/catagories">
            <img className="w-[20vh] h-[25vh] " src="pp3.jpeg" alt="" />
          </Link>
        </div>
      </div>
      <div className="py-9">
        <h2 className="flex mx-auto items-center justify-center hover:underline text-3xl font-mono ">
          Our lattest arrival
        </h2>
        <p className="flex mx-auto justify-center items-center py-4 text-center sm:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing Numquam <br />{" "}
          &ensp; &ensp; &ensp;esse possimus optio quidem obcaecati vitae elit.
          <br />
          impedit placeat veniam laboriosam quisquam magni commodi atque. Ipsa.
        </p>
        <Link to="/latest">
          <button className="flex mx-auto justify-center items-center text-2xl bg-blue-600 ">
            Button
          </button>
        </Link>
      </div>
      <br />
      <br />
      <div className="flex mx-auto justify-center items-center">
        <div className="">
          <Link to="/latest">
            <img className="w-[20vh] " src="pp7.jpeg" alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/latest">
            <img className="w-[20vh] " src="pp6.jpeg" alt="" />
          </Link>
        </div>
        <div className="">
          <Link to="/latest">
            <img className="w-[20vh] " src="pp5.jpeg" alt="" />
          </Link>
        </div>
      </div>
      <div className="flex-col py-8 mx-auto justify-center">
        <div className="">
          <h2 className="flex mx-auto text-3xl hover:underline justify-center font-mono">
            Our Product
          </h2>
        </div>
        <div className="flex-col mx-auto justify-center items-center py-4 ">
          <p className="flex mx-auto justify-center items-center py-4 text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing Numquam <br />
            &ensp; &ensp; esse possimus optio quidem obcaecati vitae elit.
            <br />
            impedit placeat veniam laboriosam quisquam magni commodi atque.
            Ipsa.
          </p>
          <Link to="/ProductPage">
            <button className="flex mx-auto justify-center items-center text-2xl bg-blue-600 ">
              Button
            </button>
          </Link>
        </div>
        <div className="flex mx-auto justify-center items-center gap-3">
          <div className="">
            <Link to="/ProductPage">
              <img className="w-[20vh] " src="pp10.jpeg" alt="" />
            </Link>
          </div>
          <div className="">
            <Link to="/ProductPage">
              <img className="w-[20vh] " src="pp11.jpeg" alt="" />
            </Link>
          </div>
          <div className="">
            <Link to="/ProductPage">
              <img className="w-[20vh] " src="pp12.jpeg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;