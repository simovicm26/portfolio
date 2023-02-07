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
        fontWeight: 500,
        border: 2,
        width: { lg: props.width || "auto", xs: '"100%"' },
        fontSize: { md: 14, lg: 16 },
        ":hover": {
          border: 2,
        },
      }}
      color="primary"
      variant="outlined"
      disableElevation
      size="large"
    >
      {props.children}
    </Button>
  );
}

export default SecondaryButton;
