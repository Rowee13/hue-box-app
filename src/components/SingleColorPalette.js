// import { useState } from "react";
import { useParams } from "react-router-dom";
import SeedPalettes from "../SeedPalettes";
import { generatePalette } from "../helpers/colorHelper";

import ColorBox from "./ColorBox";

// ________________________________________________________________

const SingleColorPalette = () => {
  // const [colorShades, setColorShades] = useState([]);

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
      key={color.id}
      name={color.name}
      background={color.hex}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <h1>SingleColorPalette</h1>
      <div className="Palette-colors">{colorBoxex}</div>
    </div>
  );
};

export default SingleColorPalette;
