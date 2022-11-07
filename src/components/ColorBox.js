import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";

// ________________________________________________________________

const ColorBox = (props) => {
	return (
		<CopyToClipboard text={props.background}>
			<div className="ColorBox" style={{ background: props.background }}>
				<div className="copy-container">
					<div className="box-container">
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
