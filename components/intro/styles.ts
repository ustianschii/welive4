import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
  TextField as MuiTextField,
  SvgIcon as MuiSvgIcon,
  styled,
} from "@mui/material";

export const Wrapper = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  margin: "150px auto 200px auto",
  padding: "30px 0",
  [theme.breakpoints.down("sm")]: {
    margin: "70px 0 10px 10px",
  },
}));

export const Box = styled(MuiBox)(({ theme }) => ({
  maxWidth: "50%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

export const Title = styled(MuiTypography)(({ theme }) => ({
  lineHeight: "1.2",
  marginRight: "100px",
  fontWeight: theme.typography.fontWeightMedium,
  [theme.breakpoints.down("sm")]: {
    margin: "0 0 20px 0",
  },
}));

export const Highlight = styled(MuiTypography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.h2.fontSize,
}));

export const SmartHomeImg = styled(MuiBox)(({ theme }) => ({
  width: "50%",
  minHeight: "500px",
  backgroundImage: `url('/images/main-smart-home.jpg')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "10px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const Description = styled(MuiTypography)(({ theme }) => ({
  display: "flex",
  fontSize: "18px",
  margin: "auto 0",
  width: "90%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "0 10px",
    whiteSpace: "pre-line",
  },
}));

export const SubscribeContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  marginTop: "40px",
  justifyContent: "flex-start",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    margin: "0",
    paddingTop: "50px",
    justifyContent: "center",
  },
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "10px 0 0 10px",
    backgroundColor: theme.palette.grey[200],
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
    },
  },
}));

export const SubscribeButton = styled(MuiButton)(({}) => ({
  borderRadius: "0 10px 10px 0",
  textTransform: "none",
  fontSize: "16px",
  maxHeight: "40px",
}));

export const StrongPoints = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginTop: "10px",
  gap: "30px",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginTop: "20px",
    gap: "20px",
  },
}));

export const StrongPointIcon = styled(MuiSvgIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: "10px",
}));

export const StrongPointTitle = styled(MuiTypography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: theme.typography.fontWeightBold,
}));

export const StrongPointContainer = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));
