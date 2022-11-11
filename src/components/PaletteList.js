import { Link } from "react-router-dom";

// ________________________________________________________________

const PaletteList = (palettes) => {
  return (
    <div>
      <h1>Hue Box</h1>
      {palettes.map((palette) => (
        <Link to={`/palette/${palette.id}`}>{palettes.paletteName}</Link>
      ))}
    </div>
  );
};

export default PaletteList;
