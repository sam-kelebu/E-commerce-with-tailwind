import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <p className="text-lg mb-4">
            ቦኤዝ is a leading online retailer dedicated to providing high-quality ሽፎን at competitive prices. We are passionate about creating ሽፎን Revolution and strive to offer a seamless shopping experience for our customers.
          </p>
          <ul className="list-disc pl-4">
            <li>Committed to customer satisfaction</li>
            <li>Wide selection of ሽፎን</li>
            <li>Competitive pricing and secure transactions</li>
            <li>Fast and reliable shipping</li>
            <li>Excellent customer support</li>
          </ul>
        </div>
        {/* <img className="object-cover rounded-lg h-full md:h-auto" src="[path to your about page image]" alt="[Image description]" /> */}
      </div>
    </div>
  );
};

export default AboutPage;
