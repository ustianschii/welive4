import {
  Container as MuiContainer,
  Typography as MuiTypography,
  Box as MuiBox,
  Button as MuiButton,
  TextField as MuiTextField,
  styled,
} from "@mui/material";

export const Wrapper = styled(MuiContainer)(({}) => ({
  display: "flex",
  margin: "100px auto",
  padding: "30px 0",
}));

export const Title = styled(MuiTypography)(({}) => ({
  width: "40%",
  lineHeight: "1.2",
  marginRight: "100px",
}));

export const Highlight = styled(MuiTypography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontSize: theme.typography.h2.fontSize,
}));

export const Mission = styled(MuiTypography)(({}) => ({
  width: "50%",
  alignContent: "center",
  paddingLeft: "20px",
}));

export const Description = styled(MuiTypography)(({}) => ({
  display: "flex",
  fontSize: "18px",
}));

export const SubscribeContainer = styled(MuiBox)(({}) => ({
  display: "flex",
  marginTop: "30px",
  justifyContent: "flex-start",
  gap: "30px",
}));

export const TextField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "20px",
    backgroundColor: theme.palette.grey[200],
  },
}));

export const SubscribeButton = styled(MuiButton)(({}) => ({
  borderRadius: "20px",
  textTransform: "none",
  fontSize: "16px",
}));
