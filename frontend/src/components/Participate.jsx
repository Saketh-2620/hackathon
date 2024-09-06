import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Participate = () => {
  const participationReasons = [
    {
      icon: <AssignmentIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "Prove your skills",
      description:
        "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
    },
    {
      icon: <GroupIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "Learn from community",
      description:
        "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "Challenge yourself",
      description:
        "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
    },
    {
      icon: (
        <WorkspacePremiumIcon sx={{ fontSize: 48, color: "primary.main" }} />
      ),
      title: "Earn recognition",
      description:
        "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#F5F5F5", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Why Participate in{" "}
          <span style={{ color: "#4CAF50" }}>AI Challenges</span>?
        </Typography>
        <Grid container spacing={6} rowSpacing={12}>
          {participationReasons.map((reason, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  backgroundColor: "white",
                  p: 3,
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {reason.icon}
                  <Typography variant="h6" sx={{ ml: 2, fontWeight: "bold" }}>
                    {reason.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {reason.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Participate;
