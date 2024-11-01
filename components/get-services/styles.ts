import { styled } from "@mui/material/styles";
import { Box as MuiBox, ListItem as MuiListItem } from "@mui/material";

import { WHITE, GET_SERVICES_BACKGROUND } from "@/styles/constants";
import { opensans } from "@/app/layout";

export const ServicesBox = styled(MuiBox)(({ theme }) => ({
  backgroundColor: GET_SERVICES_BACKGROUND,
  [theme.breakpoints.down("sm")]: {
    padding: "0 30px 20px 30px",
  },
}));

export const ListItem = styled(MuiListItem)(({ theme }) => ({
  color: WHITE,
  fontFamily: opensans.style.fontFamily,
  paddingBottom: "2px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
  },
}));
