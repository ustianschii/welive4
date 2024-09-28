import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
  styled,
} from "@mui/material";

export const Wrapper = styled(MuiContainer)({
  display: "flex",
  marginBottom: "200px",
});

export const BannerBox = styled(MuiBox)({
  width: "50%",
  backgroundImage: `url('/images/banner.jpeg')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "left",
  borderRadius: "10px",
});

export const ConsultationBox = styled(MuiBox)(({}) => ({
  minHeight: "500px",
}));
export const TextBox = styled(MuiBox)(({}) => ({
  width: "50%",
}));

export const ConsultationTitle = styled(MuiTypography)(({ theme }) => ({
  margin: "50px 0 0 50px",
  fontWeight: theme.typography.fontWeightMedium,
}));

export const Button = styled(MuiButton)({
  backgroundColor: "white",
  color: "black",
  borderRadius: "20px",
  textTransform: "none",
  margin: "30px 0 0 50px",
});

export const TextTitle = styled(MuiTypography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  textAlign: "end",
}));

export const Highlight = styled(MuiTypography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.h2.fontSize,
}));
export const Description = styled(MuiTypography)(({}) => ({
  fontSize: "18px",
  marginLeft: "90px",
  marginTop: "115px",
  // textAlign: "end",
}));
