/* eslint-disable react/display-name */
import React from "react";
import { Box, Container, Stack, Typography, Button, Link } from "@mui/material";

const ContactSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Box sx={{ bgcolor: "light.main" }}>
        <Container
          maxWidth="xl"
          sx={{
            pb: { xs: 8, md: 16, lg: 20, xl: 30 },
          }}
        >
          <Typography mb={2} align="center" sx={{ color: "#778DA9" }}>
            THE NEXT STEP
          </Typography>
          <Stack spacing={4} alignItems="center">
            <Typography align="center" variant="h2">
              Lets work together!
            </Typography>
            <Typography sx={{ width: { md: "80%", lg: "60%" } }} align="center">
              If you like what you see and think I could help your business feel
              free to contact me and we can set up a FREE call to talk about
              your requirements.
            </Typography>
            {/* <Stack spacing={2}>
              <Box sx={{ border: 2, borderRadius: 4, px: 4, py: 2 }}>
                <Typography align="center">061 355 7855</Typography>
              </Box>
              <Box sx={{ border: 2, borderRadius: 4, px: 4, py: 2 }}>
                <Typography>simoicm26@gmail.com</Typography>
              </Box>
              <Link
                href="mailto:simovicm26@gmail.com"
                color="light.main"
                underline="none"
              >
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    border: 2,
                    borderRadius: 4,
                    py: 2,
                    px: 4,
                    width: "100%",
                  }}
                >
                  <Typography>SEND ME AN EMAIL</Typography>
                </Button>
              </Link>
            </Stack> */}
          </Stack>
        </Container>
      </Box>
    </div>
  );
});

export default ContactSection;
