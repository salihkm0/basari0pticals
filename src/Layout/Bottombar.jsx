import React from "react";
// import HomeIcon from "@mui/icons-material/Home";
import offerIcon from "../assets/images/Icon Frame.png";
import homeIcon from "../assets/images/Home.png";
import categoryIcon from "../assets/images/Icon Frame1.png";
import cartIcon from "../assets/images/Shopping Card.png";

export const Bottombar = () => {
  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full sm:hidden bg-white border-t p-4 flex justify-around items-center gap-2 shadow-md">
        <div className="flex justify-center items-center flex-col">
        <img src={homeIcon} alt="" />
          {/* <HomeIcon sx={{ color: "#f2d200" }} /> */}
          <p className="text-gray-500 text-[13px]">Home</p>
        </div>
        <div className="flex justify-center items-center flex-col">
        <img src={offerIcon} alt="" />
          <p className="text-gray-500 text-[13px]">Offer</p>
        </div>
        <div className="flex justify-center items-center flex-col">
        <img src={categoryIcon} alt="" />
          <p className="text-gray-500 text-[13px]">Category</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={cartIcon} alt="" />
          <p className="text-gray-500 text-[13px]">Cart</p>
        </div>
      </div>
    </div>
  );
};
