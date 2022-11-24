import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./pageNotFound.module.scss";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box component="section" className={styles.error_section}>
        <Box className={styles.error_form}>
          <Typography component="h1">404</Typography>
          <Typography component="h2">Oops! PAGE NOT FOUND</Typography>
          <Typography component="p">
            Sorry but the page you are looking for does not exist, have been
            removed, name changed or is temporarily unavailable.
          </Typography>

          <Button
            component="button"
            variant="outlined"
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default PageNotFound;
