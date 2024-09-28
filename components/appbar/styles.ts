import {
  AppBar as MuiAppBar,
  AppBarProps,
  TextField as MuiTextField,
  Button as MuiButton,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const AppBar = styled(MuiAppBar)<AppBarProps>(({}) => ({
  backgroundColor: "white",
  color: "black",
}));

export const SearchField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "10px",
    backgroundColor: theme.palette.grey[200],
  },
}));

export const SearchButtonIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "30px",
}));

export const PagesButton = styled(MuiButton)(({ theme }) => ({
  margin: theme.spacing(2, 3),
  color: "black",
  display: "block",
  fontFamily: "roboto",
  fontSize: "20px",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
    borderRadius: "20px",
  },
}));
