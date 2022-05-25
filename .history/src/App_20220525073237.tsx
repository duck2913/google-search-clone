import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Routes } from "./Components/Routes";
import { useState } from "react";

const App = () => {
	const [darkTheme, setDarkTheme] = useState<boolean>(false);

	return (
		<div className={darktheme ? "dark" : ""}>
			<div>App</div>
		</div>
	);
};

export default App;
