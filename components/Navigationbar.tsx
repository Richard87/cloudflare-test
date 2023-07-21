import {
  AppBar,
  Drawer,
  IconButton,
  ThemeOptions,
  Toolbar,
  createMuiTheme,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  TitleWrapper,
  MenuItemWrapper,
  AppBarWrapper, AppBarActions,
} from "../styles/styledComponents";
import {UserButton, useUser, SignedIn, SignedOut, SignOutButton, useClerk} from "@clerk/nextjs";
import Link from "next/link";
import MediaQuery from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
  signedIn: boolean
  onLogin: () => void
  onLogout: () => void
  roles: string[]
};
const Navigationbar = ({signedIn, onLogout, onLogin, roles}: Props) => {
  const [open, setState] = useState(false);
  
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };
  /*  <SignedIn>
<UserButton afterSignOutUrl={"/"}/>
</SignedIn>
<SignedOut>
    <Link href={"/sign-in"}>Logg inn</Link>
</SignedOut>*/
  const matches = useMediaQuery("(max-width:1160px)");

  return (
    <>
      <AppBarWrapper color="primary" position="static" style={{}}>
        <Toolbar>
          <TitleWrapper>HAPPYDOGS</TitleWrapper>
          <Box flexGrow={1} />
          <AppBarActions>
            {signedIn ? <>
              {roles.includes("Pilot") ? <>
                <Button
                  href={"/me/profile"}
                  color="inherit"
                >
                  <MenuItemWrapper>Profil</MenuItemWrapper>
                </Button>
              </> : null}
              <Button
                onClick={onLogout}
                color="inherit"
              >
                <MenuItemWrapper>Logg ut</MenuItemWrapper>
              </Button>
            </> : <>
              <Button
                onClick={onLogin}
                color="inherit"
              >
                <MenuItemWrapper>Logg inn</MenuItemWrapper>
              </Button>
            </>}
          </AppBarActions>
          {/* 
          <Box>
            {matches ? (
              <IconButton>
                <MenuIcon />
              </IconButton>
            ) : (
              <div>
                <Button
                  key="courses"
                  sx={{
                    color: "#4E4234",
                    marginTop: "40px",
                    marginRight: "40px",
                  }}
                >
                  <MenuItemWrapper>GRATIS KURS</MenuItemWrapper>{" "}
                </Button>
                <Button
                  key="studs"
                  sx={{
                    color: "#4E4234",
                    marginTop: "40px",
                    marginRight: "40px",
                  }}
                >
                  <MenuItemWrapper>AVL </MenuItemWrapper>{" "}
                </Button>
                <Button
                  key="litters"
                  sx={{
                    color: "#4E4234",
                    marginTop: "40px",
                    marginRight: "40px",
                  }}
                >
                  <MenuItemWrapper>VALPER </MenuItemWrapper>{" "}
                </Button>
                <Button
                  key="breeders"
                  sx={{
                    color: "#4E4234",
                    marginTop: "40px",
                    marginRight: "40px",
                  }}
                >
                  <MenuItemWrapper>OPPDRETTERE </MenuItemWrapper>{" "}
                </Button>
                <Button
                  key="clubs"
                  sx={{
                    color: "#4E4234",
                    marginTop: "40px",
                    marginRight: "40px",
                  }}
                >
                  <MenuItemWrapper>KLUBBER </MenuItemWrapper>{" "}
                </Button>
              </div>
            )}
          </Box>*/}
        </Toolbar>
      </AppBarWrapper>
    </>
  );
};

export default Navigationbar;
