import "./ColorBox.css";

// ________________________________________________________________

const ColorBox = (props) => {
	return (
		<div className="ColorBox" style={{ background: props.background }}>
			<div className="copy-container">
				<div className="box-container">
					<span>{props.name}</span>
				</div>
				<button className="copy-button">Copy</button>
			</div>
			<span className="see-more">More</span>
		</div>
	);
};

export default ColorBox;
