import React from "react";

import { Box, Button, IconButton } from "@mui/material";

import Image from "next/image";

import { GetServiceCard } from "../../components/shared/get-services-black-card";
import {
  SEPARATOR_BACKGROUND,
  GREEN_DARK,
  SEMI_BOLD,
  WHITE,
} from "@/styles/constants";
import { consultation } from "../../components/shared/get-services-black-card/services";
import { opensans } from "@/app/layout";
import GetConsultationLayout from "./layout";
import { ROUTES } from "../../utils/routes-constants";

export default function GetConsultation() {
  return (
    <GetConsultationLayout>
      <Box p="0 10px 20px 10px" sx={{ backgroundColor: SEPARATOR_BACKGROUND }}>
        <GetServiceCard data={consultation} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Button
            href={ROUTES.GET_SERVICES}
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
          <IconButton href={ROUTES.CART_CHOOSED_SERVICES}>
            <Image
              src="/get-services/cart.svg"
              alt="cart-icon"
              width={70}
              height={70}
            />
          </IconButton>
        </Box>
      </Box>
    </GetConsultationLayout>
  );
}
