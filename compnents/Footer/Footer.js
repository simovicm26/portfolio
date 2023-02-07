import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "light.main", borderTop: 2 }}>
      <Container>
        <Typography py={4} align="center">
          Marko Simović Personal Portfolio
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
