import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import header from "../assets/header.svg";
import rocket from "../assets/rocket.svg";

import model from "../assets/model.svg";
import data from "../assets/data.svg";
import hosted from "../assets/hosted.svg";

import ExploreChallenges from "../components/Explore";
import { Link } from "react-router-dom";
import Participate from "../components/Participate";

const App = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#FFFFFF" }}>
          <Toolbar>
            <img
              src={header}
              alt="Icon"
              style={{ width: 100, height: 50, marginLeft: 40 }}
            />
          </Toolbar>
        </AppBar>

        {/* After App bar */}

        <Box sx={{ backgroundColor: "#003145", color: "white", py: 8 }}>
          <Container sx={{ flexGrow: 1, px: { xs: 2, md: 15 }, mt: 8 }}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 8, p: 1 }}>
                <Typography
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    fontSize: 48,
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: 1.3,
                    justifyContent: "center",
                  }}
                >
                  Accelerate Innovation with Global AI Challenges
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: 18,
                    fontFamily: "Poppins, sans-serif",
                    py: 3,
                    justifyContent: "center",
                  }}
                >
                  AI Challenges at DPHI simulate real-world problems. It is a
                  great place to put your AI/Data Science skills to test on
                  diverse datasets allowing you to foster learning through
                  competitions.
                </Typography>
                <Link to="/challenge/create" style={{ textDecoration: "none" }}>
                  <Button
                    style={{
                      backgroundColor: "#FFFFFF",
                    }}
                    variant="contained"
                    sx={{
                      mt: 2,
                      color: "#003145",
                      fontWeight: 600,
                      fontSize: 18,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Create Challenge
                  </Button>
                </Link>
              </Grid>
              <Grid sx={{ mt: -18, mr: -10 }}>
                <img
                  src={rocket}
                  alt="Icon"
                  style={{ width: 330, height: 520 }}
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={model}
                  alt="Icon"
                  style={{ width: 100, height: 50 }}
                />
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    100K+
                  </Typography>
                  <Typography variant="body2">AI model submissions</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={data} alt="Icon" style={{ width: 100, height: 50 }} />
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    50K+
                  </Typography>
                  <Typography variant="body2">Data Scientists</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={hosted}
                  alt="Icon"
                  style={{ width: 100, height: 50 }}
                />
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    100+
                  </Typography>
                  <Typography variant="body2">AI Challenges hosted</Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* participate section */}
        <Participate />

        {/* Explore Challenges */}
        <ExploreChallenges />
      </Box>
    </>
  );
};

export default App;
