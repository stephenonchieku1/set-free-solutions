import React from 'react';
import { Link } from 'react-router-dom';
import invoice from '../images/invoice.svg';

const Hero = () => {
  return (
    <div className="md:min-h-[90vh] w-full md:px-8 px-2 py-[80px] flex lg:flex-row items-center justify-center flex-col">
      <div
        className="pl-3 my-4 lg:mb-1 lg:text-left pr-6 mb-10"
        style={{ flex: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 md:text-4xl">
          Need It Solutions?
        </h2>
        <p className="opacity-70 mb-4 text-sm md:text-base leading-loose">
          Get free consultation
        
        </p>

        <Link to="/contacts">
          <button className="rounded w-[200px] px-2 py-3 bg-orange-500 text-gray-50">
            GET STARTED
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-center" style={{ flex: 0.4 }}>
        <img src={invoice} alt="Print invoices" className="w-2/3 lg:w-full" />
      </div>
    </div>
  );
};

export default Hero;