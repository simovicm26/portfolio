import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import Illustration from "../UI/Illustration";
import PencilIllustration from "../../public/pencil.svg";

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
              Having agreed on project goals, budget, and scope, it iss time to
              start the implementation. I start by creating compelling content
              for the website with messaging and tone that appeals to your
              target audience.
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center", lg: "left" },
                width: { md: "50%", lg: "auto" },
              }}
            >
              Then, we define the website architecture for user-friendliness and
              ease of use. To align with your vision, I create mood boards to
              reflect the desired aesthetic and use them as a guide throughout
              the design process. I then integrate all elements into a
              low-fidelity design.
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center", lg: "left" },
                width: { md: "50%", lg: "auto" },
              }}
            >
              We stay in constant communication to keep you informed and
              involved, ensuring the final product meets your expectations.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Illustration img={PencilIllustration} alt="Pencil illustration" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
