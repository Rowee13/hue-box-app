import { Link } from "react-router-dom";

// ________________________________________________________________

const PaletteList = ({ palettes }) => {
  return (
    <div>
      <h1>Hue Box</h1>
      {palettes.map((palette) => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
};

export default PaletteList;
