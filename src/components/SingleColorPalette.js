import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import SeedPalettes from "../SeedPalettes";
import { generatePalette } from "../helpers/colorHelper";

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import "./ColorBox.css";

// ________________________________________________________________

const SingleColorPalette = () => {
  const [colorFormat, setColorFormat] = useState("hex");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { paletteId, colorId } = useParams();

  const findPalette = (id) => {
    return SeedPalettes.find(function (palette) {
      return palette.id === id;
    });
  };

  const palette = generatePalette(findPalette(paletteId));

  const gatherShades = () => {
    let colorShades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      colorShades = colorShades.concat(
        allColors[key].filter((color) => color.id === colorId)
      );
    }
    return colorShades.slice(1);
  };

  const shades = gatherShades();

  const colorBoxex = shades.map((color) => (
    <ColorBox
      key={`${color.id} ${color.name}`}
      name={color.name}
      background={color[colorFormat]}
      showLink={false}
    />
  ));

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
    <div className=" SingleColorPalette Palette">
      <Navbar
        colorFormat={colorFormat}
        changeColorFormat={changeColorFormat}
        snackbarOpen={snackbarOpen}
        closeSnackbar={closeSnackbar}
        showColorSlider={false}
      />
      <div className="Palette-colors">
        {colorBoxex}
        <div className="go-back ColorBox">
          <Link to={`/palette/${paletteId}`} className="back-button">
            GO BACK
          </Link>
        </div>
      </div>
      <PaletteFooter
        paletteName={paletteId}
        colorId={`/ ${colorId}`}
        emoji={palette.emoji}
      />
    </div>
  );
};

export default SingleColorPalette;
