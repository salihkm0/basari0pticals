import React from "react";
import logo from "../assets/images/image 3.png";
import { Box, Stack, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { SearchBar } from "../Components/searchBox/SearchBar";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";

export const Navbar = () => {
  return (
    <>
      <div
        className="container mx-auto p-4 pt-6 md:px-6 lg:
        px-8 xl:px-10 2xl:px-12 relative"
        // h-[120px] md:h-auto
      >
        <Box
          direction="row"
          spacing={"15px"}
          // borderColor={"red"}
          // border={1}
          display={"flex"}
          alignItems={"center"}
          // padding={"10px"}
          justifyContent={"space-between"}
        >
          <div className="flex gap-3 justify-center items-center">
            <Box className="logo" padding={""}>
              <img src={logo} alt="Logo" />
            </Box>
            <Stack
              direction="row"
              spacing={0.5}
              lineHeight={1}
              display={"flex"}
              alignItems={"center"}
            >
              <PlaceIcon />
              <Stack
                direction="column"
                spacing={0.5}
                lineHeight={1}
                //   display={"grid"}
                //   alignItems={"center"}
              >
                <Typography variant="p" fontSize={"13px"}>
                  Deliver to
                </Typography>
                <Typography variant="p" fontSize={"10px"}>
                  United States
                </Typography>
              </Stack>
            </Stack>
          </div>
          <SearchBar />
          <div className="flex gap-5 justify-center items-center">
            <Stack direction={"row"} alignItems={"center"} spacing={"6px"}>
              <PermIdentityOutlinedIcon/>
              <Stack>
                <Typography variant="p" fontSize={"10px"} className=" hidden sm:block">
                  Sign In
                </Typography>
                <Typography variant="p" fontSize={"13px"} className=" hidden sm:block">
                  Account
                </Typography>
              </Stack>
            </Stack>
            <div className=" hidden sm:block">
            <ShoppingCartOutlinedIcon/>
            </div>
          </div>
        </Box>
      </div>
      {/* <hr class="h-1 bg-gray-200 border-0" /> */}
      <Divider />
      <div
        className="container mx-auto px-4  md:px-6 lg:
        px-8 xl:px-10 2xl:px-12 hidden sm:block "
      >
        <Box
          direction="row"
          // border={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingTop={"15px"}
        >
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={"20px"}
          >
            <Typography variant="h5" fontSize={"13px"} fontWeight={"600"}>
              Home
            </Typography>
            <Typography variant="h5" fontSize={"13px"} fontWeight={"600"}>
              Shop
            </Typography>
            <Typography variant="h5" fontSize={"13px"} fontWeight={"600"}>
              Men
            </Typography>
            <Typography variant="h5" fontSize={"13px"} fontWeight={"600"}>
              Women
            </Typography>
            <Typography variant="h5" fontSize={"13px"} fontWeight={"600"}>
              Sunglasses
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={"20px"}
          >
            <Typography variant="h5" fontSize={"13px"} fontWeight={"600"}>
              Contact
            </Typography>
          </Stack>
        </Box>
      </div>
    </>
  );
};
