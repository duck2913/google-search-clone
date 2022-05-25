import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import { useState } from "react";
import Search from "./components/Search";

const App = () => {
	const [darkTheme, setDarkTheme] = useState<boolean>(false);

	return (
		<div className={darkTheme ? "dark" : ""}>
			<div className="bg-gray-100 dark:bg-slate-900 dark:text-gray-200 min-h-screen">
				<Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
				<Routes />
				<Footer />
			</div>
			<Search />
		</div>
	);
};

export default App;
