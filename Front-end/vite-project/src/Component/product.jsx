import React from "react";

const product = () => {
  return (
    <div className="container mx-auto py-8 px-4 items-center justify-center">
      <h1 className="text-3xl mt-9 text-center">Product Page</h1>
      <div className="grid gap-9 grid-cols-3 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto w-[60vh]">
        <div className="flex flex-col items-center">
          <img src="pp32.jpeg" alt="product" className="w-auto h-auto mb-2" />
          <h4 className="text-center">Product Name: pink</h4>
        </div>
        <div className="flex flex-col items-center">
          <img src="pp34.jpeg" alt="product" />
          <h4>Product Name: pink</h4>
        </div>
        <div className="flex flex-col items-center">
          <img src="pp35.jpeg" alt="product"className="w-auto h-auto mb-2" />
          <h4 className="text-center">Product Name: pink</h4>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* <img src="pp35.jpeg" alt="product" className="w-auto h-auto mb-2"/>
          <h4 className="text-center">Product Name: pink</h4> */}
        </div>
      </div>
      <div className="grid gap-9 grid-cols-3 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto w-[60vh] justify-center items-center">
        <div className="flex flex-col items-center">
          <img src="pp11.jpeg" alt="product" className="w-auto h-auto mb-2"/>
          <h4>Product Name: red</h4>
        </div>

        <div className="flex flex-col items-center">
          <img src="pp11.jpeg" alt="product" className="w-auto h-auto mb-2"/>
          <h4>Product Name: pink</h4>
        </div>
        <div className="flex flex-col items-center">
          <img src="pp11.jpeg" alt="product" className="w-auto h-auto mb-2"/>
          <h4>Product Name: pink</h4>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src="pp11.jpeg" alt="product" className="w-auto h-auto mb-2"/>
          <h4>Product Name: pink</h4> */}
        </div>
      </div>
      <div className="grid gap-9 grid-cols-3 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto w-[60vh]">
        <div className="flex flex-col items-center">
          <img src="pp11.jpeg" alt="product" className="sd:w-[10vh]" />
          <h4>Product Name: pink</h4>
        </div>

        <div className="flex flex-col items-center">
          <img src="pp11.jpeg" alt="product" className="sd:w-[10vh]" />
          <h4>Product Name: pink</h4>
        </div>
        <div className="flex flex-col items-center">
          <img src="pp11.jpeg" alt="product" className="sd:w-[10vh]" />
          <h4>Product Name: pink</h4>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src="pp11.jpeg" alt="product" className="sd:w-[10vh]" />
          <h4>Product Name: pink</h4> */}
        </div>
      </div>
    </div>
  );
};

export default product;
