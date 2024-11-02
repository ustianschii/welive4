import React from "react";

import { Box, Button, IconButton } from "@mui/material";

import Image from "next/image";

import { GetServiceCard } from "../../components/shared/get-services-black-card";
import {
  GET_SERVICES_BACKGROUND,
  GREEN_DARK,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { support } from "../../components/shared/get-services-black-card/services";
import { opensans } from "@/app/layout";
import GetSupportLayout from "./layout";

export default function GetSupport() {
  return (
    <GetSupportLayout>
      <Box
        p="0 10px 20px 10px"
        sx={{ backgroundColor: GET_SERVICES_BACKGROUND }}
      >
        <GetServiceCard data={support} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            style={{
              border: "2px solid",
              borderColor: GREEN_DARK,
              borderRadius: "10px",
              color: WHITE,
              fontFamily: opensans.style.fontFamily,
              fontWeight: SEMI_BOLD,
              fontSize: "18px",
              padding: "5px 30px",
            }}
          >
            &#10229; BACK
          </Button>
          <IconButton>
            <Image
              src="/get-services/cart.svg"
              alt="cart-icon"
              width={70}
              height={70}
            />
          </IconButton>
        </Box>
      </Box>
    </GetSupportLayout>
  );
}
