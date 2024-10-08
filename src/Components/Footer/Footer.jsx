import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 mb-[150px] md:mb-2 ">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-8 mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              Join our newsletter for £10 offs
            </h2>
            <p className="text-gray-600 max-w-[400px] mt-2">
              Register now to get latest updates on promotions & coupons. Don’t
              worry, we not spam!
            </p>
          </div>
          <div className="flex items-center p-3 relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 border border-gray-400  w-full  md:w-[300px] rounded-l-[8px] outline-none"
            />
            <button className="bg-purple-600 text-white py-[13px] px-6 rounded-r-[8px]">
              SEND
            </button>
            <div className="absolute top-[65px]">
              <p className="text-[11px]">
                By subscribing you agree to our
                <a className="text-blue-400" href="">
                  Terms & Conditions
                </a>
                and
                <a className="text-blue-400" href="">
                  Privacy & Cookies Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        {/* End of Newsletter Section */}

        <div className="flex justify-between items-start flex-wrap gap-y-8 border-b pb-8">
          <div className="max-w-[350px]">
            <h4 className="text-[18px] font-[500]">Do You Need Help ?</h4>
            <p className="mt-4">
              Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
              Pressa fåmoska.
            </p>
          </div>
          <div>
            <h4 className="text-[18px] font-[500]">Let Us Help You</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="">Accessibility Statement</a>
              </li>
              <li>
                <a href="">Your Orders</a>
              </li>
              <li>
                <a href="">Returns & Replacements</a>
              </li>
              <li>
                <a href="">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="">Refund and Returns Policy</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms and Conditions</a>
              </li>
              <li>
                <a href="">Cookie Settings</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-[500]">Get to Know Us</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="">Careers for Grogin</a>
              </li>
              <li>
                <a href="">About Grogin</a>
              </li>
              <li>
                <a href="">Inverstor Relations</a>
              </li>
              <li>
                <a href="">Grogin Devices</a>
              </li>
              <li>
                <a href="">Customer reviews</a>
              </li>
              <li>
                <a href="">Social Responsibility</a>
              </li>
              <li>
                <a href="">Store Locations</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-[500]">Download our app</h4>
          </div>
        </div>
        <div className="flex justify-between items-start my-8">
          <div>
            <p className="text-gray-500 text-[13px]">
              Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right
              reserved. Powered by
              <a href="" className="text-blue-600">
                {" "}
                BlackRise Themes{" "}
              </a>
              .
            </p>
          </div>
          <div className="flex items-center text-gray-700 gap-3 text-[13px] flex-wrap">
            <p>
              <a href="">Terms and Conditions</a>
            </p>
            <p>
              <a href="">Privacy Policy</a>
            </p>
            <p>
              <a href="">Order Tracking</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
