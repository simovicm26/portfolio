import React from "react";
import { useRef } from "react";
import {
  Container,
  Grid,
  Box,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import Image from "next/image";
import mockupImage from "../../public/mockup.jpg";
import styles from "./Project.module.css";
import PrimaryButton from "../UI/LinkButton";
import Logo2 from "../../public/Group2.svg";
import Logo6 from "../../public/Group6.svg";

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
              variant="h2"
              sx={{ textAlign: { xs: "center", lg: "left" } }}
            >
              Tax Consultant Personal Website
            </Typography>
            <Divider sx={{ border: 2, borderColor: "primary", width: "40%" }} />
            <Typography
              sx={{
                textAlign: { xs: "center", lg: "left" },
                width: { md: "50%", lg: "auto" },
              }}
            >
              The requirement from the client was a minimal and sleek design
              utilizing the color red to build a sales page for the clients
              services. On this project I was tasked with writing the content,
              creating assets, designing and developing the website.
            </Typography>
            <Stack
              direction={{ md: "column", lg: "row" }}
              alignItems={{ xs: "center", lg: "flex-start" }}
              mt={4}
              spacing={{ xs: 2, md: 2 }}
              sx={{ width: { md: "90%", sm: "70%", xs: "100%" } }}
            >
              <PrimaryButton
                width="50%"
                widthSecond="50%"
                url="https://akcize-klijent.vercel.app/"
              >
                VISIT WEBSITE
              </PrimaryButton>
            </Stack>
          </Stack>
          <Typography
            mt={{ lg: 8, xs: 4 }}
            mb={{ lg: 4, xs: 2 }}
            sx={{ fontWeight: 500, textAlign: { xs: "center", lg: "left" } }}
          >
            Tech Stack:
          </Typography>
          <Stack
            direction="row"
            justifyContent={{ xs: "center", lg: "flex-start" }}
            spacing={4}
            xs={{ width: "100%" }}
          >
            <Box>
              <Image src={Logo2} alt="NextJS logo" width={100}></Image>
            </Box>
            <Box>
              <Image src={Logo6} alt="ReactJS logo" width={100}></Image>
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
              position: "relative",
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
                alt="Mockup for tax consultant website"
                src={mockupImage}
                width={2014}
                height={2014}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
