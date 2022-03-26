import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import logo from "../../assets/andre/gdscplm.png";

import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB966",
    },
    secondary: {
      main: "#FFFF",
    },
  },
});

export default function andreNavbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 6 }}>
        <AppBar
          position="absolute"
          style={{
            background: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          }}
          sx={{ pr: 5, pl: 5, pt: 5 }}
        >
          <Toolbar>
            <IconButton size="medium" color="inherit" aria-label="menu">
              <img src={logo} style={{ width: "20%", height: "auto" }} />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button
              variant="contained"
              sx={{ flexDirection: "row-reverse" }}
              style={{ background: "##FFB966" }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#FFFF" }}>
                Log In
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
