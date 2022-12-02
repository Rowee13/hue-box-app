import { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import SeedPalettes from "../SeedPalettes";
import { generatePalette } from "../helpers/colorHelper";

import "./Palette.css";

// ________________________________________________________________

const Palette = () => {
  const [colorLevel, setColorLevel] = useState(500);
  const [colorFormat, setColorFormat] = useState("hex");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { paletteId } = useParams();

  const findPalette = (id) => {
    return SeedPalettes.find(function (palette) {
      return palette.id === id;
    });
  };

  const palette = generatePalette(findPalette(paletteId));

  const colorBoxes = palette.colors[colorLevel].map((color) => {
    return (
      <ColorBox
        background={color[colorFormat]}
        name={color.name}
        key={color.id}
        colorId={color.id}
        paletteId={paletteId}
        palettes={color[colorFormat]}
      />
    );
  });

  const changeColorLevel = (colorLevel) => {
    setColorLevel(colorLevel);
  };

  const changeColorFormat = (e) => {
    setColorFormat(e.target.value);
    setSnackbarOpen(true);
    setTimeout(() => {
      setSnackbarOpen(false);
    }, 3000);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="Palette">
      <Navbar
        colorLevel={colorLevel}
        changeColorLevel={changeColorLevel}
        colorFormat={colorFormat}
        changeColorFormat={changeColorFormat}
        snackbarOpen={snackbarOpen}
        closeSnackbar={closeSnackbar}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
