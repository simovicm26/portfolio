import React from "react";
import {
  Container,
  Grid,
  Box,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import Image from "next/image";
import ProfessionalImage from "../../public/professional.jpg";
import FluxLogo from "../../public/flux-logo.svg";
import styles from "./Project.module.css";

function HeroSection() {
  return (
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
          direction={{ xs: "column", lg: "row-reverse" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          alignItems="center"
          columnSpacing={{ xl: 24, lg: 16 }}
          rowSpacing={{ xs: 7, sm: 8, md: 10 }}
        >
          <Grid item lg={6} xs={12} alignItems="center">
            <Stack spacing={4} alignItems={{ xs: "center", lg: "flex-start" }}>
              <Typography
                variant="h2"
                sx={{ textAlign: { xs: "center", lg: "left" } }}
              >
                Hello I’m Marko
              </Typography>
              <Divider
                sx={{ border: 2, borderColor: "primary", width: "40%" }}
              />
              <Typography
                sx={{
                  textAlign: { xs: "center", lg: "left" },
                  width: { md: "50%", lg: "auto" },
                }}
              >
                I bring 2+ years of experience in web development and design to
                the table, using the latest and cutting-edge technologies to
                create interactive, engaging, and visually stunning web content.
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: "center", lg: "left" },
                  width: { md: "50%", lg: "auto" },
                }}
              >
                My mission is to elevate your brands online presence, helping
                you achieve your business objectives with a website that not
                only looks great, but functions flawlessly.
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: "center", lg: "left" },
                  width: { md: "50%", lg: "auto" },
                }}
              >
                As a perfectionist, I aim to exceed your expectations with every
                project, delivering results that not only meet, but surpass your
                goals. Partner with me and experience the difference a dedicated
                and skilled web developer can make for your business.
              </Typography>
            </Stack>
            <Stack
              spacing={4}
              justifyContent="center"
              alignItems="center"
              direction="column"
              my={6}
            >
              <Typography fontWeight={500}>Certified by:</Typography>
              <Box>
                <Image
                  alt="Developer portrait"
                  src={FluxLogo}
                  width={100}
                  height={100}
                ></Image>
              </Box>
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
                  alt="Portrait photo of web developer"
                  src={ProfessionalImage}
                  width={2014}
                  height={2014}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
