import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import "./ColorBox.css";

// ________________________________________________________________

const ColorBox = ({ background, name, paletteId, colorId }) => {
  const [copyColor, setCopyColor] = useState(false);

  const handleCopyColor = () => {
    setCopyColor(true);
    setTimeout(() => {
      setCopyColor(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={handleCopyColor}>
      <div className="ColorBox" style={{ background }}>
        <div
          style={{ background }}
          className={`copy-overlay ${copyColor && " show"}`}
        />
        <div className={`copy-msg ${copyColor && " show"}`}>
          <h1>copied</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <Link
          to={`/palette/${paletteId}/${colorId}`}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="see-more">More</span>
        </Link>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
