import { Routes, Route } from "react-router-dom";

import PaletteList from "./components/PaletteList";
import Palette from "./components/Palette";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import SeedPalettes from "./SeedPalettes";

// ________________________________________________________________

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={SeedPalettes} />} />
      <Route path="/palette/:paletteId" element={<Palette />} />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette />}
      />
      <Route path="/palette/new" element={<NewPaletteForm />} />
    </Routes>
  );
};

export default App;
