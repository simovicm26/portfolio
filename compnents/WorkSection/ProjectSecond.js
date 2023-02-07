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
import mockupImage from "../../public/mockup2.jpg";
import styles from "./Project.module.css";
import PrimaryButton from "../UI/LinkButton";
import Logo9 from "../../public/Group9.svg";
import Logo11 from "../../public/Group11.svg";

function HeroSection() {
  return (
    <Box sx={{ bgcolor: "light.main" }}>
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
              Education Center Ključ
            </Typography>
            <Divider sx={{ border: 2, borderColor: "primary", width: "40%" }} />
            <Typography
              sx={{
                textAlign: { xs: "center", lg: "left" },
                width: { md: "50%", lg: "auto" },
              }}
            >
              The client wanted a website with a CMS that would allow them to
              easily add new pages and change the websites content. The main
              obsticle dealing with this project was with the website
              architecture and figuring out how to structure the pages in an
              orderly fashion.
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
                url="https://edukativni-centar-kljuc-final.webflow.io/"
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
              <Image src={Logo9} alt="Webflow logo" width={100}></Image>
            </Box>
            <Box>
              <Image src={Logo11} alt="Javascript logo" width={100}></Image>
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
                alt="Mockup for education center website"
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
