import { Stack } from "@mui/material";
import React from "react";
import { SingleProductDtails } from "../Components/ProductDetails/SingleProductDtails";
import { ProductDetails } from "../Components/ProductDetails/ProductDetails";

export const ProductDetailsPage = () => {
  return (
    <>
      <Stack direction={"row"} width={"100%"} alignItems={"center"} justifyContent={"center"}>
        {/* <SingleProductDtails/> */}
        <ProductDetails/>
      </Stack>
    </>
  );
};
