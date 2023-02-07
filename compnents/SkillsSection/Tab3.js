import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import Illustration from "../UI/Illustration";
import KeyboardIllustration from "../../public/keyboard.svg";

function HeroSection() {
  return (
    <Box sx={{ bgcolor: "light.main" }}>
      <Grid
        container
        my={{ xs: 8, sm: 20, md: 3 }}
        direction={{ xs: "column", lg: "row" }}
        justifyContent={{ sm: "center", md: "space-between" }}
        alignItems="center"
        columnSpacing={{ xl: 24, lg: 16 }}
        rowSpacing={{ xs: 7, sm: 8, md: 10 }}
      >
        <Grid item lg={6} xs={12} alignItems="center">
          <Stack spacing={4} alignItems={{ xs: "center", lg: "flex-start" }}>
            <Typography
              sx={{
                textAlign: { xs: "center", lg: "left" },
                width: { md: "50%", lg: "auto" },
              }}
            >
              In the final stage, all previous steps converge to create the
              final website or application design. I present a comprehensive
              demo showcasing functionality, user interface, and aesthetic. You
              review it and provide feedback or request changes.
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center", lg: "left" },
                width: { md: "50%", lg: "auto" },
              }}
            >
              Upon approval, I start the development and implementation,
              ensuring smooth operation and fixing any potential issues through
              thorough testing. Our hard work and collaboration come to fruition
              as the polished website is ready to launch, marking a new chapter
              for your business.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Illustration
            img={KeyboardIllustration}
            alt="Keyboard illustration"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
