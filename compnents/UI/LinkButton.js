import React from "react";
import { Box, Link } from "@mui/material";

function PrimaryButton(props) {
  return (
    <Link
      href={props.url}
      target="_blank"
      color="light.main"
      underline="none"
      sx={{
        textAlign: "center",
        width: {
          lg: props.width || "auto",
          md: props.widthSecond,
          xs: "100%",
        },
        fontSize: { md: 14, lg: 16 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "dark.main",
          px: 3,
          py: 2,
          borderRadius: 3,
        }}
      >
        {props.children}
      </Box>
    </Link>
  );
}

export default PrimaryButton;
