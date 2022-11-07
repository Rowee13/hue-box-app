import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";

// ________________________________________________________________

const ColorBox = (props) => {
	const [copyColor, setCopyColor] = useState(false);

	const handleCopyColor = () => {
		setCopyColor(true);
		setTimeout(() => {
			setCopyColor(false);
		}, 1500);
	};

	return (
		<CopyToClipboard text={props.background} onCopy={handleCopyColor}>
			<div className="ColorBox" style={{ background: props.background }}>
				<div
					style={{ background: props.background }}
					className={`copy-overlay ${copyColor && " show"}`}
				/>
				<div className={`copy-msg ${copyColor && " show"}`}>
					<h1>copied</h1>
					<p>{props.background}</p>
				</div>
				<div className="copy-container">
					<div className="box-content">
						<span>{props.name}</span>
					</div>
					<button className="copy-button">Copy</button>
					<span className="see-more">More</span>
				</div>
			</div>
		</CopyToClipboard>
	);
};

export default ColorBox;
