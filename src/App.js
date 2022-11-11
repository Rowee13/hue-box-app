import { Routes, Route, useParams } from "react-router-dom";

import PaletteList from "./components/PaletteList";
import Palette from "./components/Palette";
import SeedColors from "./SeedColors";
import { generatePalette } from "./helpers/colorHelper";
import "./App.css";

// ________________________________________________________________

const App = () => {
  const findPalette = (id) => SeedColors.find((palette) => palette.ud === id);

  const PaletteComponentWrapper = () => {
    const { id } = useParams();
    return <Palette palette={generatePalette(findPalette(id))} />;
  };

  return (
    <Routes>
      <Route path="/" element={<PaletteList />} />
      <Route path="/palette/:paletteid" element={<PaletteComponentWrapper />} />
    </Routes>
  );
};

export default App;
