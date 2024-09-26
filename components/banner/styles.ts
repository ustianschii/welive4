import { Container, styled } from "@mui/material";

export const BannerContainer = styled(Container)({
  display: "flex",
  height: "400px",
  backgroundImage: `url('/images/banner.jpeg')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "20px",
});
