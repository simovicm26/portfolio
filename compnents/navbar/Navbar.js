import { AppBar, Toolbar, Stack, Button, Link, Drawer } from "@mui/material";
import GithubIcon from "../../public/github.svg";
import DarkGithubIcon from "../../public/githubdark.svg";
import MenuIcon from "../../public/menu.svg";
import Image from "next/image";
import { useState } from "react";

function NavBar(props) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            color="inherit"
            sx={{ fontWeight: 400, fontSize: 18 }}
            onClick={props.scrollToTop}
          >
            Marko S.
          </Button>
          {!open && (
            <Stack
              direction="row"
              spacing={4}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button
                color="inherit"
                sx={{ fontWeight: 400 }}
                onClick={props.scrollToWork}
              >
                My Work
              </Button>
              <Button color="inherit" onClick={props.scrollToMe}>
                About Me
              </Button>
              <Button color="inherit" onClick={props.scrollToContact}>
                Contact Me
              </Button>
              <Link
                href="https://github.com/simovicm26"
                target="_blank"
                underline="none"
              >
                <Image
                  alt="github icon"
                  src={GithubIcon}
                  height={30}
                  width={30}
                ></Image>
              </Link>
            </Stack>
          )}
          <Button
            color="inherit"
            onClick={handleOpen}
            aria-label="menu icon"
            sx={{
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <Image alt="menu-icon" src={MenuIcon}></Image>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 4,
            px: { xs: 6, sm: 12 },
          }}
        >
          <Link
            href="https://github.com/simovicm26"
            target="_blank"
            underline="none"
            aria-label="github account"
            sx={{ p: 4 }}
          >
            <Image
              alt="github icon"
              src={DarkGithubIcon}
              height={50}
              width={50}
            ></Image>
          </Link>
          <Button
            color="inherit"
            sx={{ fontWeight: 500, fontSize: 18, mb: 4 }}
            onClick={props.scrollToTop}
          >
            Marko S.
          </Button>
          <Stack direction="column" spacing={4}>
            <Button
              color="inherit"
              sx={{ fontWeight: 400 }}
              onClick={props.scrollToWork}
            >
              My Work
            </Button>
            <Button color="inherit" onClick={props.scrollToMe}>
              About Me
            </Button>
            <Button color="inherit" onClick={props.scrollToContact}>
              Contact Me
            </Button>
          </Stack>
        </Toolbar>
      </Drawer>
    </>
  );
}

export default NavBar;
