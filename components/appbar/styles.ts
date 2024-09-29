import {
  AppBar as MuiAppBar,
  // AppBarProps,
  TextField as MuiTextField,
  Button as MuiButton,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// export const AppBar = styled(MuiAppBar)<AppBarProps>(({}) => ({
//   backgroundColor: "white",
//   color: "black",
// }));

export const AppBar = styled(MuiAppBar)<{ scrolled: boolean }>(
  ({ scrolled, theme }) => ({
    backgroundColor: scrolled ? theme.palette.primary.main : "white",
    color: scrolled ? "white" : "black",
    transition: "background-color 0.3s ease-in-out",
  })
);

export const SearchField = styled(MuiTextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "10px",
    backgroundColor: theme.palette.grey[200],
  },
}));

export const SearchButtonIcon = styled(SearchIcon)<{ scrolled: boolean }>(
  ({ scrolled, theme }) => ({
    color: scrolled ? "white" : theme.palette.primary.main,
    fontSize: "30px",
  })
);

export const PagesButton = styled(MuiButton)<{ scrolled: boolean }>(
  ({ scrolled, theme }) => ({
    margin: theme.spacing(2, 3),
    color: scrolled ? "white" : "black",
    display: "block",
    fontFamily: "roboto",
    fontSize: "20px",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: scrolled ? "white" : theme.palette.primary.main,
      color: scrolled ? "black" : "white",
      borderRadius: "20px",
    },
  })
);
