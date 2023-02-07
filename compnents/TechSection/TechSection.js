import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Logo2 from "../../public/Group2.svg";
import Logo3 from "../../public/Group3.svg";
import Logo4 from "../../public/Group4.svg";
import Logo5 from "../../public/Group5.svg";
import Logo6 from "../../public/Group6.svg";
import Logo7 from "../../public/Group7.svg";
import Logo8 from "../../public/Group8.svg";
import Logo9 from "../../public/Group9.svg";
import Logo10 from "../../public/Group10.svg";
import Logo11 from "../../public/Group11.svg";
import styles from "./TechSection.module.css";

function TechSection() {
  return (
    <Box sx={{ bgcolor: "light.main" }}>
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 8, md: 16, lg: 20 },
        }}
      >
        <Stack alignItems="center" spacing={4} mb={{ xl: 24, lg: 16, xs: 8 }}>
          <Typography
            variant="h2"
            sx={{ color: "primary", textAlign: "center" }}
          >
            Technologies I Use
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "primary",
              textAlign: "center",
              width: { md: "80%", lg: "60%" },
            }}
          >
            My expertise lies in utilizing the MERN stack and NextJS framework
            for full-stack development. I also possess skills in creating web
            assets using tools such as Photoshop, Illustrator, After Effects and
            Figma. Additionally, I have experience in building websites using
            Webflow as per client requirements.
          </Typography>
        </Stack>
        <Marquee
          gradientColor={[238, 238, 238]}
          gradientWidth={200}
          style={{ maxWidth: "max-content" }}
          speed={80}
        >
          <Box sx={{ width: { xs: 150, lg: 250 } }}>
            <Image src={Logo2} width={300} />
          </Box>
          <Box sx={{ width: { xs: 150, lg: 250 } }}>
            <Image src={Logo3} width={300} />
          </Box>
          <Box sx={{ width: { xs: 150, lg: 250 } }}>
            <Image src={Logo4} width={300} />
          </Box>
          <Box sx={{ width: { xs: 150, lg: 250 } }}>
            <Image src={Logo5} width={300} />
          </Box>
          <Box sx={{ width: { xs: 150, lg: 250 } }}>
            <Image src={Logo6} width={300} />
          </Box>
          <Box sx={{ width: { xs: 150, lg: 250 } }}>
            <Image src={Logo7} width={300} />
          </Box>
          <Box sx={{ width: { xs: 150, lg: 250 } }}>
            <Image src={Logo8} width={300} />
          </Box>
          <Box sx={{ width: { xs: 150, lg: 250 } }}>
            <Image src={Logo9} width={300} />
          </Box>
          <Box sx={{ width: { xs: 150, lg: 250 } }}>
            <Image src={Logo10} width={300} />
          </Box>
          <Box sx={{ width: { xs: 150, lg: 250 } }}>
            <Image src={Logo11} width={300} />
          </Box>
        </Marquee>
      </Container>
    </Box>
  );
}

export default TechSection;
