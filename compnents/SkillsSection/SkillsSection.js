import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Container, Tabs, Tab, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import Project from "./Tab";
import Project2 from "./Tab2";
import Project3 from "./Tab3";
import Project4 from "./Tab4";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return <Box>{value === index && children}</Box>;
}

function SkillsSection() {
  let myTimer;
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };

  function handleTimeOut() {
    setValue((prevValue) => (prevValue === 3 ? 0 : prevValue + 1));
  }

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    myTimer = window.setInterval(handleTimeOut, 20000);
  }, []);

  return (
    <Box sx={{ bgcolor: "light.main" }}>
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 8, md: 16, lg: 20 },
        }}
      >
        <Typography mb={2} align="center" sx={{ color: "#778DA9" }}>
          HOW I WORK
        </Typography>
        <Typography align="center" variant="h2" mb={10}>
          My Work Process
        </Typography>
        <Tabs
          value={value}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scroll tabs"
          onChange={handleTabs}
        >
          <Tab
            label="Pre Process"
            sx={{ minWidth: "fit-content", flex: 1, fontSize: 18 }}
          />
          <Tab
            label="Low-fidality"
            sx={{ minWidth: "fit-content", flex: 1, fontSize: 18 }}
          />
          <Tab
            label="Design & Implementation"
            sx={{ minWidth: "fit-content", flex: 1, fontSize: 18 }}
          />
          <Tab
            label="Revisions & Feedback"
            sx={{ minWidth: "fit-content", flex: 1, fontSize: 18 }}
          />
        </Tabs>
        <SwipeableViews
          axis={"x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
            <Project />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Project2></Project2>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Project3></Project3>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Project4></Project4>
          </TabPanel>
        </SwipeableViews>
      </Container>
    </Box>
  );
}

export default SkillsSection;
