import styles from "../styles/Home.module.css";
import { useRef } from "react";
import NavBar from "../compnents/navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import HeroSection from "../compnents/HeroSection/HeroSection";
import MidTextSection from "../compnents/MidTextSection/MidTextSection";
import SkillsSection from "../compnents/SkillsSection/SkillsSection";
import TechSection from "../compnents/TechSection/TechSection";
import WorkSection from "../compnents/WorkSection/WorkSection";
import AboutMeSection from "../compnents/AboutMeSection/AboutMeSection";
import ContactSection from "../compnents/ContactSection/ContactSection";
import Footer from "../compnents/Footer/Footer";

const theme = createTheme({
  palette: {
    text: {
      primary: "#152432",
      secondary: "#778da9",
    },
    light: {
      main: "#eeeeee",
    },
    dark: {
      main: "#152432",
    },
    primary: {
      main: "#152432",
    },
    grey: {
      main: "#778da9",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
    fontFamily: "Montserrat",
    color: "dark.main",
    fontWeight: 400,
    h1: {
      fontSize: 56,
      "@media (max-width:1500px)": {
        fontSize: 50,
      },
      "@media (max-width:1200px)": {
        fontSize: 40,
      },
      "@media (max-width:1200px)": {
        fontSize: 36,
      },
      "@media (max-width:900px)": {
        fontSize: 50,
        textAlign: "center",
      },
      "@media (max-width:600px)": {
        fontSize: 36,
      },
    },
    h2: {
      fontSize: 36,
      "@media (max-width:900px)": {
        fontSize: 28,
      },
      "@media (max-width:600px)": {
        fontSize: 24,
      },
    },
    body1: {
      fontSize: 18,
      "@media (max-width:1500px)": {
        fontSize: 16,
      },
    },
    h6: {
      fontWeight: 400,
    },
  },
});

export default function Home() {
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const mainRef = useRef(null);

  const handleClick = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTop = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar
        scrollToWork={handleClick}
        scrollToContact={handleContact}
        scrollToMe={handleAbout}
        scrollToTop={handleTop}
      ></NavBar>
      <main>
        <HeroSection
          ref={mainRef}
          scrollToWork={handleClick}
          scrollToContact={handleContact}
        ></HeroSection>
        <MidTextSection scrollToMe={handleAbout}></MidTextSection>
        <SkillsSection></SkillsSection>
        <TechSection></TechSection>
        <WorkSection ref={workRef}></WorkSection>
        <AboutMeSection ref={aboutRef}></AboutMeSection>
        <ContactSection ref={contactRef}></ContactSection>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </ThemeProvider>
  );
}
