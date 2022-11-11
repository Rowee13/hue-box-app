import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./Navbar.css";

// ________________________________________________________________

const Navbar = (palettes) => {
  const [colorFormat, setColorFormat] = useState("hex");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleFormatChange = (e) => {
    setColorFormat(e.target.value);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <Link>Hue Box</Link>
      </div>
      <div className="slider-container">
        <span>Level: {palettes.colorLevel}</span>
        <div className="slider">
          <Slider
            min={100}
            max={900}
            step={100}
            defaultValue={palettes.colorLevel}
            onChange={palettes.changeLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-standard-label">
            Color Format
          </InputLabel>
          <Select value={colorFormat} onChange={handleFormatChange}>
            <MenuItem>HEX - #ffffff</MenuItem>
            <MenuItem>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Snackbar
        open={snackbarOpen}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={3000}
        message={
          <span id="message">
            Format Changed to {colorFormat.toUpperCase()}
          </span>
        }
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      ></Snackbar>
    </header>
  );
};

export default Navbar;
