import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import HandshakeIllustration from "../../public/handshake.svg";
import Illustration from "../UI/Illustration";

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
              During this development stage, I conduct a comprehensive
              consultation to gain insight into your business goals, website
              goals, brand identity, and target audience. The aim is to gather
              as much information as possible to create a personalized web
              experience that meets your needs and converts visitors into
              customers.
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center", lg: "left" },
                width: { md: "50%", lg: "auto" },
              }}
            >
              We cover the project scope and cost, making sure all your
              requirements are considered and there is a shared understanding of
              the budget and timeline. By the end of the call, we have a solid
              foundation to create a website that represents your brand and
              delivers results.
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Illustration
            img={HandshakeIllustration}
            alt="Handshake illustration"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
