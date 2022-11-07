// import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import "./Navbar.css";

// ________________________________________________________________

const Navbar = () => {
	return (
		<header className="Navbar">
			<div className="logo">Hue Box</div>
			<div className="slider-container">
				<span>Level: 0</span>
				<div className="slider">
					<Slider min={100} max={900} step={100} />
				</div>
			</div>
			<div className="select-container">
				<select name="color" id=""></select>
			</div>
		</header>
	);
};

export default Navbar;
