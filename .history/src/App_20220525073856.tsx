import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Routes } from "./Components/Routes";
import { useState } from "react";

const App = () => {
	const [darkTheme, setDarkTheme] = useState<boolean>(false);

	return (
		<div className={darkTheme ? "dark" : ""}>
			<div className="bg-gray-100 dark:bg-gray-900 dark:color-white-100 min-h-screen">
				<Navbar />
				<Routes />
				<Footer />
			</div>
		</div>
	);
};

export default App;
