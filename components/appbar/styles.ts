import {
  AppBar as MuiAppBar,
  AppBarProps,
  TextField as MuiTextField,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const AppBar = styled(MuiAppBar)<AppBarProps>(({}) => ({
  backgroundColor: "white",
  color: "black",
}));

export const SearchField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "20px",
    backgroundColor: theme.palette.grey[200],
  },
}));

export const SearchButtonIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "30px",
}));
