/* eslint-disable react/display-name */
import React from "react";
import { Container, Grid, Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import mainImage from "../../public/hero-profile.jpg";
import styles from "./HeroSection.module.css";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";

const HeroSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Box sx={{ bgcolor: "light.main" }}>
        <Container
          maxWidth="xl"
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            my={{ xs: 8, sm: 20, md: 3 }}
            direction="row"
            justifyContent={{ sm: "center", md: "space-between" }}
            alignItems="center"
            columnSpacing={{ xl: 24, lg: 16 }}
            rowSpacing={{ xs: 7, sm: 10, md: 0 }}
          >
            <Grid item md={6} sm={12} alignItems="center">
              <Stack alignItems={{ xs: "center", md: "flex-start" }}>
                <Typography sx={{ color: "text.secondary" }}>
                  -WEB DEVELOPER & DESIGNER
                </Typography>
                <Typography variant="h1">
                  Stand out and reach more customers with a visually stunning &
                  optimized website
                </Typography>

                <Stack
                  direction={{ md: "column", lg: "row" }}
                  mt={4}
                  spacing={{ xs: 2, md: 2 }}
                  sx={{ width: { md: "90%", sm: "70%", xs: "100%" } }}
                >
                  <PrimaryButton
                    onClick={props.scrollToContact}
                    width="50%"
                    widthSecond="100%"
                  >
                    LETS WORK TOGETHER
                  </PrimaryButton>
                  <SecondaryButton onClick={props.scrollToWork} width="50%">
                    MY WORK
                  </SecondaryButton>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  padding: 2,
                  border: 1,
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "100%",
                    overflow: "hidden",
                    border: 8,
                    display: "flex",
                    maxWidth: 600,
                  }}
                >
                  <Image
                    className={styles.image}
                    alt="Professional web developer portrait in a suit"
                    src={mainImage}
                    width={2014}
                    height={2014}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
});

export default HeroSection;
