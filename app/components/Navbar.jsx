"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const Navbar = () => {
  const { data: session } = useSession();

  const customInputStyle = {
    borderRadius: "10px",
  };
  const customcolourstyle = {
    backgroundColor: "whitesmoke",
    borderRadius: "10px",
  };
  const customButtonStyle = {
    fontSize: "16px",
    textTransform: "None",
    marginRight: "27px",
  };

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          boxSizing: "border-box",
          background: "#131515",
          // background: "rgba(255,255,255,0.2)",
          height: "70px",
          justifyContent: "center",
        }}
      >
        <Toolbar
          class="container"
          variant="dense"
          style={{
            marginLeft: "7px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button variant="text" style={customButtonStyle}>
              <Link
                style={{ color: "#00A97F", textDecoration: "none" }}
                href="/"
              >
                HOME
              </Link>
            </Button>
            <Button variant="text" style={customButtonStyle}>
              <Link
                style={{ color: "#00A97F", textDecoration: "none" }}
                href="#about"
              >
                ABOUT
              </Link>
            </Button>
            <Button variant="text" style={customButtonStyle}>
              <Link
                style={{ color: "#00A97F", textDecoration: "none" }}
                href="/services"
              >
                SERVICES
              </Link>
            </Button>
            <TextField
              size="small"
              InputProps={{
                style: customInputStyle,
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              style={customcolourstyle}
              placeholder="Search..."
            />
          </div>
          <h1>
            {!session ? (
              <div class="button__container">
                <button className="button">
                  <Link href="/api/auth/signin">Login</Link>
                </button>
                <button className="button">
                  <Link href="/signup">SignUp</Link>
                </button>
              </div>
            ) : (
              <button className="button">
                <Link href="/api/auth/signout">Logout</Link>
              </button>
            )}
          </h1>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
