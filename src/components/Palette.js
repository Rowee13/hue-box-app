import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

// ________________________________________________________________

const Palette = (props) => {
	const colorBoxes = props.colors.map((color) => {
		return <ColorBox background={color.color} name={color.name} />;
	});

	return (
		<div className="Palette">
			<Navbar />
			<div className="Palette-colors">{colorBoxes}</div>
		</div>
	);
};

export default Palette;
