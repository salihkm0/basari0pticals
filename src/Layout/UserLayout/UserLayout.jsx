import React from "react";
import { Navbar } from "../Navbar";
import { ProductDetailsPage } from "../../Pages/ProductDetailsPage";
import { Bottombar } from "../Bottombar";

export const UserLayout = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div
          className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 xl:p-10 2xl:p-12 ">
          <ProductDetailsPage />
        </div>
        <Bottombar/>
      </div>
    </>
  );
};
