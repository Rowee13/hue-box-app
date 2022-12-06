import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";

import "./ColorBox.css";

// ________________________________________________________________

const ColorBox = ({ background, name, paletteId, colorId, showLink }) => {
  const [copyColor, setCopyColor] = useState(false);

  const handleCopyColor = () => {
    setCopyColor(true);
    setTimeout(() => {
      setCopyColor(false);
    }, 1500);
  };

  const contrast = chroma.contrast(background, "black") < 6;
  // const isDarkColor = chroma(background).luminance() <= 0.08;
  // const isLightColor = chroma(background).luminance() <= 1;

  return (
    <CopyToClipboard text={background} onCopy={handleCopyColor}>
      <div className="ColorBox" style={{ background }}>
        <div
          style={{ background }}
          className={`copy-overlay ${copyColor && " show"}`}
        />
        <div className={`copy-msg ${copyColor && " show"}`}>
          <h1>copied</h1>
          <p className={contrast ? "light-text" : "dark-text"}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={contrast ? "light-text" : "dark-text"}>
              {name}
            </span>
          </div>
          <button
            className={`copy-button ${contrast ? "light-text" : "dark-text"}`}
          >
            Copy
          </button>
        </div>
        {showLink && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={`see-more 
                ${contrast ? "light-text" : "dark-text"}
                `}
            >
              MORE
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
