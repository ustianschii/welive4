import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
  TextField as MuiTextField,
  SvgIcon as MuiSvgIcon,
  styled,
} from "@mui/material";

export const Wrapper = styled(MuiContainer)(({}) => ({
  display: "flex",
  margin: "150px auto 200px auto",
  padding: "30px 0",
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  lineHeight: "1.2",
  marginRight: "100px",
  fontWeight: theme.typography.fontWeightMedium,
}));

export const Highlight = styled(MuiTypography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.h2.fontSize,
}));

export const SmartHomeImg = styled(MuiBox)(({}) => ({
  width: "50%",
  minHeight: "500px",
  backgroundImage: `url('/images/main-smart-home.jpg')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "10px",
}));

export const Description = styled(MuiTypography)(({}) => ({
  display: "flex",
  fontSize: "18px",
  margin: "auto 0",
  width: "90%",
}));

export const SubscribeContainer = styled(MuiBox)(({}) => ({
  display: "flex",
  marginTop: "40px",
  justifyContent: "flex-start",
  gap: "10px",
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "10px 0 0 10px",
    backgroundColor: theme.palette.grey[200],
  },
}));

export const SubscribeButton = styled(MuiButton)(({}) => ({
  borderRadius: "0 10px 10px 0",
  textTransform: "none",
  fontSize: "16px",
}));

export const StrongPoints = styled(MuiBox)(({}) => ({
  display: "flex",
  width: "100%",
  marginTop: "10px",
  gap: "30px",
}));

export const StrongPointIcon = styled(MuiSvgIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: "10px",
}));

export const StrongPointTitle = styled(MuiTypography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: theme.typography.fontWeightBold,
}));

export const StrongPointContainer = styled(MuiBox)(({}) => ({
  display: "flex",
}));
