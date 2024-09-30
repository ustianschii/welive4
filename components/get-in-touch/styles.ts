import {
  Box as MuiBox,
  Typography as MuiTypography,
  styled,
} from "@mui/material";

export const Wrapper = styled(MuiBox)(({}) => ({
  width: "35%",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: "30px",
  marginBottom: "10px",
}));

export const Address = styled(MuiTypography)(({}) => ({}));
