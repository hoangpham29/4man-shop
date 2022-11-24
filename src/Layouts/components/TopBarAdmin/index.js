import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import usersSlice from "../../../redux/usersSlice/usersSlice";

const TopBarAdmin = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(usersSlice.actions.logout());

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: "#888" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            BiHo-Shop Admin
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              onClick={handleLogout}
              size="large"
              aria-label="search"
              color="secondary"
            >
              <LoginIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBarAdmin;
