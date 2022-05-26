import { NavLink } from "react-router-dom";
import { FormEvent, useContext } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const navigate = useNavigate();
	const ctx = useContext(ResultContext);

	function inputChangeHandler(event) {
		ctx.setSearchTerm(event.target.value);
	}

	function submitHandler(event: FormEvent) {
		event.preventDefault();
		ctx.getResults("/search", ctx.searchTerm);
		navigate("/search");
		ctx.setSearchTerm("");
	}

	const activeStyle = {
		color: "#4982cc",
		borderBottom: "3px solid #4982cc",
		paddingBottom: "4px",
	};
	return (
		<form className="wrapper flex flex-col" onSubmit={submitHandler}>
			<div className="search-bar bg-gray-50 flex items-center rounded-3xl px-4 py-2 gap-2 justify-between dark:text-gray-700 ">
				<p>🔭</p>
				<input
					type="text"
					className="bg-gray-50 focus:outline-none"
					placeholder="type to search..."
					onChange={inputChangeHandler}
					value={ctx.searchTerm}
				/>
				<button>X</button>
			</div>
			<div className="nav-links flex gap-8 mt-4">
				<NavLink
					to="/search"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					🔎All
				</NavLink>
				<NavLink to="/news" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					📰News
				</NavLink>
				<NavLink
					to="/images"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					🖼️Images
				</NavLink>
				<NavLink to="/video" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
					📷Videos
				</NavLink>
			</div>
		</form>
	);
};

export default Search;
