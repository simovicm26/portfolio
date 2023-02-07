import React from "react";
import { Button } from "@mui/material";

function SecondaryButton(props) {
  return (
    <Button
      onClick={props.onClick}
      sx={{
        borderRadius: 3,
        px: 3,
        py: 2,
        fontWeight: 400,
        border: 1,
        width: {
          lg: props.width || "auto",
          md: "auto",
          sm: "auto",
          xs: "100%",
        },
        fontSize: { md: 14, lg: 16 },
      }}
      color="light"
      variant="outlined"
      disableElevation
      size="large"
    >
      {props.children}
    </Button>
  );
}

export default SecondaryButton;
