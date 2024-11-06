import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const MyApp = () => {
	return <h2>Chai Aur React | Suryansh</h2>;
};
// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_blank",
//     },
//     children: "Click me to visit Google",
// }

const anotherElement = (
	<a href="https://www.google.com" target="_blank">
		Click me to visit to google
	</a>
);
const anotherUser = "Chai Aur React"
const reactElement = React.createElement(
	"a",
	{ href: "https://www.google.com", target: "_blank" },
	"Click me to visit google",
    anotherUser
);

createRoot(document.getElementById("root")).render(reactElement);