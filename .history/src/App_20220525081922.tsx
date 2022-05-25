import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Routes from "./Components/Routes";
import { useState } from "react";

const App = () => {
	const [darkTheme, setDarkTheme] = useState<boolean>(false);

	return (
		<div className={darkTheme ? "dark" : ""}>
			<div className="bg-gray-100 dark:bg-slate-900 dark:text-white-500 min-h-screen">
				<Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
				<Routes />
				<Footer />
			</div>
		</div>
	);
};

export default App;
