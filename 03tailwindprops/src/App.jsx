import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
				Tailwind Test
			</h1>
			<div className="cards">
				<Card username="chaiaurcode" title="Web Developer" />
				<Card username="Hitesh" title="Manager" />
			</div>
		</>
	);
}

export default App;
