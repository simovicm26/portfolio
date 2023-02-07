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
import mockupImage from "../../public/mockup.jpg";
import styles from "./Project.module.css";

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
        <Grid item xs={12} alignItems="center">
          <Stack
            spacing={4}
            sx={{ minHeight: { lg: 600 } }}
            alignItems={{ xs: "center" }}
          >
            <Stack alignItems="center">
              <Typography
                sx={{
                  textAlign: { xs: "center" },
                  width: { md: "50%", lg: "auto" },
                  fontWeight: 500,
                }}
              >
                After Project
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: "center" },
                  width: { md: "80%", lg: "60%" },
                }}
              >
                Upon the successful completion of our project, I am happy to
                offer my services for future endeavors and I am eager to
                continue this partnership as your business grows and evolves.
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography
                sx={{
                  textAlign: { xs: "center" },
                  width: { md: "50%", lg: "auto" },
                  fontWeight: 500,
                }}
              >
                Revisions
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: "center" },
                  width: { md: "80%", lg: "60%" },
                }}
              >
                It is important to note that revisions during the development
                process are limited to three per each phase of our
                collaboration. While I am committed to ensuring your complete
                satisfaction, additional revisions may incur additional charges
                to accommodate the extra time and resources required to complete
                them.
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
