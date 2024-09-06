import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import { useSelector } from "react-redux";
import CountdownTimer from "./CountDownTimer";

export default function ExploreChallenges() {
  const hackathonData = useSelector((state) => state.hackathon);

  const [searchTerm, setSearchTerm] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filters, setFilters] = useState({
    status: { active: false, upcoming: false, past: false },
    level: { easy: false, medium: false, hard: false },
  });

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [value]: !prevFilters[category][value],
      },
    }));
  };

  const getStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (now < start) return "upcoming";
    if (now > end) return "past";
    return "active";
  };

  const [filteredChallenges, setFilteredChallenges] = useState([]);

  useEffect(() => {
    const updateStatus = () => {
      const updatedChallenges = hackathonData.searchData.filter((challenge) => {
        const status = getStatus(challenge.startDate, challenge.endDate);
        const statusFilter = Object.values(filters.status).some((v) => v);
        const levelFilter = Object.values(filters.level).some((v) => v);

        return (
          challenge.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (!statusFilter || filters.status[status]) &&
          (!levelFilter || filters.level[challenge.level])
        );
      });
      setFilteredChallenges(updatedChallenges);
    };

    updateStatus();
    const interval = setInterval(() => {
      updateStatus();
    }, 1000);

    return () => clearInterval(interval);
  }, [hackathonData, filters, searchTerm]);

  return (
    <Box sx={{ backgroundColor: "#001F3F", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "white", mb: 4 }}
        >
          Explore Challenges
        </Typography>
        <Box sx={{ display: "flex", mb: 4 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: "gray" }} />,
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          />
          <Button
            variant="contained"
            onClick={handleFilterClick}
            sx={{ ml: 2, backgroundColor: "white", color: "black" }}
          >
            <FilterListIcon /> Filter
          </Button>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleFilterClose}
        >
          <MenuItem disabled>Status</MenuItem>
          {Object.keys(filters.status).map((status) => (
            <MenuItem key={status}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.status[status]}
                    onChange={() => handleFilterChange("status", status)}
                  />
                }
                label={status.charAt(0).toUpperCase() + status.slice(1)}
              />
            </MenuItem>
          ))}
          <MenuItem disabled>Level</MenuItem>
          {Object.keys(filters.level).map((level) => (
            <MenuItem key={level}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filters.level[level]}
                    onChange={() => handleFilterChange("level", level)}
                  />
                }
                label={level.charAt(0).toUpperCase() + level.slice(1)}
              />
            </MenuItem>
          ))}
        </Menu>
        <Grid container spacing={3}>
          {filteredChallenges.map((challenge, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={challenge.image}
                  alt={challenge.name}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Chip
                    label={getStatus(challenge.startDate, challenge.endDate)}
                    size="small"
                    sx={{
                      mb: 1,
                      backgroundColor:
                        getStatus(challenge.startDate, challenge.endDate) ===
                        "upcoming"
                          ? "#FFA726"
                          : getStatus(
                              challenge.startDate,
                              challenge.endDate
                            ) === "active"
                          ? "#66BB6A"
                          : "#EF5350",
                      color: "white",
                    }}
                  />
                  <Typography variant="h6" component="div" gutterBottom>
                    {challenge.name}
                  </Typography>

                  {getStatus(challenge.startDate, challenge.endDate) ===
                    "upcoming" && (
                    <CountdownTimer
                      targetDate={challenge.startDate}
                      status="upcoming"
                    />
                  )}
                  {getStatus(challenge.startDate, challenge.endDate) ===
                    "active" && (
                    <CountdownTimer
                      targetDate={challenge.endDate}
                      status="active"
                    />
                  )}
                  {getStatus(challenge.startDate, challenge.endDate) ===
                    "past" && (
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      gutterBottom
                    >
                      Ended on:{" "}
                      {new Date(challenge.endDate).toLocaleDateString()}
                    </Typography>
                  )}

                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      backgroundColor: "green",
                    }}
                    sx={{
                      mt: 3,
                    }}
                  >
                    Participate Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
