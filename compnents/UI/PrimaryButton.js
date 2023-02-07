import React from "react";
import { Button, Link } from "@mui/material";

function PrimaryButton(props) {
  return (
    <Button
      onClick={props.onClick}
      sx={{
        position: "relative",
        borderRadius: 3,
        px: 3,
        py: 2,
        width: {
          lg: props.width || "auto",
          md: props.widthSecond,
          xs: "100%",
        },
        fontSize: { md: 14, lg: 16 },
      }}
      variant="contained"
      disableElevation
      size="large"
    >
      {props.children}
    </Button>
  );
}

export default PrimaryButton;
