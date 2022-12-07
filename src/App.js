import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import PaletteList from "./components/PaletteList";
import Palette from "./components/Palette";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import { SeedPalettes } from "./SeedPalettes";

// ________________________________________________________________

const App = () => {
  const [colorPalettes, setColorPalettes] = useState([
    { palettes: SeedPalettes },
  ]);

  const savePalette = (newPalette) => {
    setColorPalettes({ palettes: [...colorPalettes, newPalette] });
  };

  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={SeedPalettes} />} />
      <Route path="/palette/:paletteId" element={<Palette />} />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette />}
      />
      <Route
        path="/palette/new"
        element={<NewPaletteForm savePalette={savePalette} />}
      />
    </Routes>
  );
};

export default App;
