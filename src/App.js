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
      <Route
        path="/palette/:paletteId/:colorId"
        element={<h1>SINGLE COLOR PAGE</h1>}
      />
    </Routes>
  );
};

export default App;
