import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const CountdownTimer = ({ targetDate, status }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formattedEndDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(targetDate));

  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      {status === "upcoming" && (
        <Typography variant="body1" gutterBottom>
          Starts in:
        </Typography>
      )}
      {status === "active" && (
        <Typography variant="body1" gutterBottom>
          Ends in:
        </Typography>
      )}
      {status === "completed" && (
        <div>
          <Typography variant="h4" gutterBottom>
            Ended on:
          </Typography>
          <Typography variant="h2" component="span" sx={{ fontWeight: "bold" }}>
            {formattedEndDate}
          </Typography>
        </div>
      )}
      {(status === "upcoming" || status === "active") && (
        <Grid container justifyContent="center" spacing={1}>
          <Grid item>
            <Box
              sx={{
                textAlign: "center",
                p: 1,
                backgroundColor: "white",
                borderRadius: 1,
              }}
            >
              <Typography variant="h4" component="span">
                {timeLeft.days || "00"}
              </Typography>
              <Typography variant="caption" display="block">
                Days
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                textAlign: "center",
                p: 1,
                backgroundColor: "white",
                borderRadius: 1,
              }}
            >
              <Typography variant="h4" component="span">
                {timeLeft.hours || "00"}
              </Typography>
              <Typography variant="caption" display="block">
                Hours
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                textAlign: "center",
                p: 1,
                backgroundColor: "white",
                borderRadius: 1,
              }}
            >
              <Typography variant="h4" component="span">
                {timeLeft.minutes || "00"}
              </Typography>
              <Typography variant="caption" display="block">
                Mins
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                textAlign: "center",
                p: 1,
                backgroundColor: "white",
                borderRadius: 1,
              }}
            >
              <Typography variant="h4" component="span">
                {timeLeft.seconds || "00"}
              </Typography>
              <Typography variant="caption" display="block">
                Secs
              </Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CountdownTimer;
