import { Container, styled } from "@mui/material";

export const BannerContainer = styled(Container)({
  display: "flex",
  height: "500px",
  backgroundImage: `url('/images/banner.jpeg')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "20px",
});
