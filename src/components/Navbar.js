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

const Navbar = ({
  colorLevel,
  changeColorLevel,
  colorFormat,
  changeColorFormat,
  snackbarOpen,
  closeSnackbar,
}) => {
  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">Hue Box</Link>
      </div>
      <div className="slider-container">
        <span>Level: {colorLevel}</span>
        <div className="slider">
          <Slider
            min={100}
            max={900}
            step={100}
            defaultValue={colorLevel}
            onAfterChange={changeColorLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <FormControl variant="standard">
          <InputLabel id="demo-simple-select-standard-label">
            Color Format
          </InputLabel>
          <Select value={colorFormat} onChange={changeColorFormat}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
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
