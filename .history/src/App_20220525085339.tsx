import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import Search from "./components/Search";
import { useState } from "react";

const App = () => {
	const [darkTheme, setDarkTheme] = useState<boolean>(false);

	return (
		<div className={darkTheme ? "dark" : ""}>
			<div className="bg-gray-100 dark:bg-slate-900 dark:text-gray-200 min-h-screen">
				<Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
				<Routes />
				<Footer />
			</div>
		</div>
	);
};

export default App;
