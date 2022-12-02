import { Routes, Route } from "react-router-dom";

import PaletteList from "./components/PaletteList";
import Palette from "./components/Palette";
import SingleColorPalette from "./components/SingleColorPalette";
import SeedPalettes from "./SeedPalettes";

// ________________________________________________________________

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={SeedPalettes} />} />
      <Route
        path="/palette/:paletteId"
        element={<Palette palettes={SeedPalettes} />}
      />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette palettes={SeedPalettes} />}
      />
    </Routes>
  );
};

export default App;
