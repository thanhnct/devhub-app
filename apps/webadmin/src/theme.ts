import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565c0",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#f5f7fb",
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
