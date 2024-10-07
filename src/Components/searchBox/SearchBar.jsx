import { Box } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const SearchBar = () => {
  return (
    <>
      <Box
        margin={"0 10px"}
        padding={"0 9px"}
        borderRadius={"5px"}
        height={"40px"}
        width={"50%"}
        className = "flex items-center justify-between bg-[#efefef] hidden md:flex"
        // hidden md:flex
      >
        <input
          className="border-none outline-none w-full bg-transparent placeholder-black"
          type="text"
          placeholder="Search for products, categories or brands..."
        />
        <SearchOutlinedIcon />
      </Box>
    </>
  );
};
