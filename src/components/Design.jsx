import React from "react";

const Design = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50 text-center">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* First Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
          <div className="mb-4">
            <img
              src="https://printify.com/pfh/assets/legacy/custom-products.png"
              alt="Higher Profits"
              className="w-full rounded-md h-48 object-contain"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg md:text-xl mb-2 text-green-600">
              CREATE <br />
              <span className="text-black">custom products</span>
            </h1>
            <p className="text-sm text-gray-500">
              We offer some of the lowest prices in the industry because print
              providers continuously compete to win your business.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
          <div className="mb-4">
            <img
              src="https://printify.com/pfh/assets/legacy/your-products.png"
              alt="Robust Scaling"
              className="w-full rounded-md h-48 object-contain"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg md:text-xl mb-2 text-green-600">
              SELL <br />
              <span className="text-black">on your terms</span>
            </h1>
            <p className="text-sm text-gray-500">
              You choose the products, sale price, and where to sell.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
          <div className="mb-4">
            <img
              src="https://printify.com/pfh/assets/legacy/fullfillment.png"
              alt="Best Selection"
              className="w-full rounded-md h-48 object-contain"
            />
          </div>
          <div className="text-gray-700">
            <h1 className="font-bold text-lg md:text-xl mb-2 text-green-600">
              WE HANDLE <br />
              <span className="text-black">fulfillment</span>
            </h1>
            <p className="text-sm text-gray-500">
              Once an order is placed, we automatically handle all the printing
              and delivery logistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
