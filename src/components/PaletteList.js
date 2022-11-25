import MiniPalette from "./MiniPalette";

// ________________________________________________________________

const PaletteList = ({ palettes }) => {
  return (
    <div>
      <h1>Hue Box</h1>
      <MiniPalette />
      {palettes.map((palette) => (
        <MiniPalette {...palette} />
      ))}
    </div>
  );
};

export default PaletteList;
