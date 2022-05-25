import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultContextProvider from "./contexts/ResultContextProvider";
import Images from "./routes/Images";
import Video from "./routes/Video";
import Search from "./routes/Search";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<ResultContextProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="/images" element={<Images />}></Route>
					<Route path="/video" element={<Video />}></Route>
					<Route path="/search" element={<Searchrch />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</ResultContextProvider>,
);
