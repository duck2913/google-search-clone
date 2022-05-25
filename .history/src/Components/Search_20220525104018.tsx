import { NavLink } from "react-router-dom";

const Search = () => {
	return (
		<div className="wrapper flex flex-col">
			<div className="search-bar bg-gray-50 flex items-center rounded-3xl px-4 py-2 gap-2 justify-between dark:text-gray-700">
				<p>🔭</p>
				<input
					type="text"
					className="bg-gray-50 focus:outline-none"
					placeholder="type to search..."
				/>
				<button>X</button>
			</div>
			<div className="nav-links flex gap-4">
				<NavLink to=""> 🔎All</NavLink>
				<NavLink to="/images">Images 🖼️</NavLink>
				<NavLink to="/news">News 📰</NavLink>
				<NavLink to="/video">Videos 📷</NavLink>
			</div>
		</div>
	);
};

export default Search;
