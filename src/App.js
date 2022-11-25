import { Routes, Route } from "react-router-dom";

import PaletteList from "./components/PaletteList";
import Palette from "./components/Palette";
import SeedPalettes from "./SeedPalettes";

// ________________________________________________________________

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={SeedPalettes} />} />
      <Route path="/palette/:paletteId" element={<Palette />} />
    </Routes>
  );
};

export default App;
