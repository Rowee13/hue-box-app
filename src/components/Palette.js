import { useState } from "react";

import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

// ________________________________________________________________

const Palette = (palettes, colorFormat, paletteName, emoji) => {
  const [colorLevel, setColorLevel] = useState(500);

  const colorBoxes = palettes.colors.map((color) => {
    return <ColorBox background={color.color} name={color.name} />;
  });

  const handleChangeLevel = () => {
    setColorLevel(colorLevel);
    console.log(colorLevel);
  };

  return (
    <div className="Palette">
      <Navbar
        level={colorLevel}
        handleChangeLevel={handleChangeLevel}
        handleChangeColorFormat={colorFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
