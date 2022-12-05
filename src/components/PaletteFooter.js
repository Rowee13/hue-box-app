// ________________________________________________________________

const PaletteFooter = ({ paletteName, emoji, colorId }) => {
  return (
    <footer className="Palette-footer">
      {`${paletteName}  ${colorId}`}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
