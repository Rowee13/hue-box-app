import Palette from "./components/Palette";
import SeedColors from "./SeedColors";
import "./App.css";

// ________________________________________________________________

function App() {
	return (
		<div className="App">
			<Palette {...SeedColors[4]} />
		</div>
	);
}

export default App;
