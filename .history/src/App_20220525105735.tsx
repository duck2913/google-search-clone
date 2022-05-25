import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
	const [darkTheme, setDarkTheme] = useState<boolean>(false);

	return (
		<div className={darkTheme ? "dark" : ""}>
			App
			<div className="bg-gray-100 dark:bg-slate-900 dark:text-gray-200 min-h-screen">
				<Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default App;
