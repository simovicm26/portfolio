/* eslint-disable react/display-name */
import React from "react";
import { Stack, Container, Box, Typography } from "@mui/material";
import Project from "./AboutProject";

const AboutMeSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Box sx={{ bgcolor: "light.main" }}>
        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 8, md: 16, lg: 20 },
          }}
        >
          <Stack spacing={{ md: 2 }}>
            <Stack>
              <Typography my={2} align="center" sx={{ color: "#778DA9" }}>
                ABOUT ME
              </Typography>
              <Typography align="center" variant="h2">
                Who Am I & Why Work With Me?
              </Typography>
            </Stack>
            <Project></Project>
          </Stack>
        </Container>
      </Box>
    </div>
  );
});

export default AboutMeSection;
