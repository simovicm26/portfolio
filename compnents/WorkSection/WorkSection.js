/* eslint-disable react/display-name */
import React from "react";
import Project from "./Project";
import ProjectSecond from "../WorkSection/ProjectSecond";
import { Box, Container, Typography, Stack } from "@mui/material";

const WorkSection = React.forwardRef((props, ref) => {
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
            <Typography sx={{ textAlign: "center" }} variant="h2">
              My Resent Work
            </Typography>
            <Project></Project>
            <ProjectSecond></ProjectSecond>
          </Stack>
        </Container>
      </Box>
    </div>
  );
});

export default WorkSection;
