import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(0)
  const increaseValue = () => {
		// counter += 1;
		// setCounter(counter + 1);
		setCounter(prevCounter => prevCounter + 1)
		setCounter(prevCounter => prevCounter + 1)
		setCounter(prevCounter => prevCounter + 1)
		setCounter(prevCounter => prevCounter + 1)
		console.log("Value Add..", counter);
  };
  const decreaseValue = () => {
		// counter += 1;
		setCounter(counter - 1);
		console.log("Value decreased..", counter);
  };

  if (counter < 0) {
    console.log("Counter is zero");
    setCounter("Value cannot be decresed more.")
	setTimeout(() => {
		setCounter(0)
	}, 2000);
  }

	return (
		<>
			<h1>Chai Aur React</h1>
			<h2>Counter Value: {counter}</h2>
			<button onClick={increaseValue}>+1</button>
			<br />
			<button onClick={decreaseValue}>-1</button>
		</>
	);
}

export default App;
