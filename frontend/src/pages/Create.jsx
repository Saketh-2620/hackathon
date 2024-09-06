import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { addCard } from "../store/card";
import header from "../assets/header.svg";
import Grid from "@mui/material/Grid2";

const Create = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [level, setLevel] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newChallenge = {
      name,
      startDate,
      endDate,
      description,
      image,
      level,
    };

    dispatch(addCard(newChallenge));

    setName("");
    setStartDate("");
    setEndDate("");
    setDescription("");
    setImage("");
    setLevel("");

    setOpenSnackbar(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "#FFFFFF" }}>
        <Toolbar>
          <img
            src={header}
            alt="Icon"
            style={{ width: 100, height: 50, marginLeft: 40 }}
          />
        </Toolbar>
      </AppBar>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 5, mx: "auto", width: "50%" }}
      >
        <Grid container spacing={3}>
          <Grid item size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Challenge Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>

          <Grid item size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="Start Date"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </Grid>

          <Grid item size={{ xs: 6 }}>
            <TextField
              fullWidth
              label="End Date"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <Button variant="outlined" component="label">
              Upload Image
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageChange}
              />
            </Button>
            {image && (
              <img
                src={image}
                alt="Preview"
                style={{ width: 100, height: 100, marginTop: 10 }}
              />
            )}
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <FormControl fullWidth>
              <InputLabel id="level-type-label">Level Type</InputLabel>
              <Select
                labelId="level-type-label"
                id="level-type"
                label="Level Type"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                required
              >
                <MenuItem value="Easy">Easy</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Hard">Hard</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{ bgcolor: "green", color: "white", mb: 4 }}
              type="submit"
            >
              Create Challenge
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Challenge successfully added!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Create;
