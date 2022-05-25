import { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ResultContext } from "./contexts/ResultContextProvider";
import Loading from "./components/Loading";
const App = () => {
	const [darkTheme, setDarkTheme] = useState<boolean>(false);
	const { results, isLoading } = useContext(ResultContext);

	return (
		<div className={darkTheme ? "dark" : ""}>
			<div className="bg-gray-100 dark:bg-slate-900 dark:text-gray-200 min-h-screen">
				<Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
				{!results && !isLoading && (
					<div className="h-96 flex items-center justify-center">
						Try to search for anything...
					</div>
                )}
                {isLoading && <Loading/>}
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default App;
