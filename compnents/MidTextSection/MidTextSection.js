import React, { useRef, useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import ThirdButton from "../UI/ThirdButton";
import BackgroundParticles from "./ParticleBackground";
import { Fade } from "@mui/material";

function MidTextSection(props) {
  const [isVisable, setIsVisable] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting);
          if (entry.isIntersecting) {
            setIsVisable(true);
            return;
          }
          // We're not intersecting, so remove the class!
          setIsVisable(false);
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
  }, [ref]);
  return (
    <div ref={ref}>
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 20, md: 28, lg: 30, xl: 40 },
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "light.main",
            textAlign: "center",
            marginBottom: 5,
            width: { xl: "90%" },
          }}
          variant="h2"
        >
          I specialize in crafting unique, custom websites & web apps for small
          businesses and startups to help them effectively communicate their
          message and turn visitors into customers.
        </Typography>
        <ThirdButton onClick={props.scrollToMe}>MORE ABOUT ME</ThirdButton>
        <BackgroundParticles />
      </Container>
    </div>
  );
}

export default MidTextSection;
