import { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import ColorBox from "./ColorBox";
import { SeedPalettes } from "../SeedPalettes";
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
  console.log(findPalette());

  const palette = generatePalette(findPalette(paletteId));

  const colorBoxes = palette.colors[colorLevel].map((color) => {
    return (
      <ColorBox
        background={color[colorFormat]}
        name={color.name}
        key={color.id}
        colorId={color.id}
        paletteId={paletteId}
        palettes={palette}
        showLink
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
        showColorSlider
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter
        paletteName={palette.paletteName}
        colorId=""
        emoji={palette.emoji}
      />
    </div>
  );
};

export default Palette;
