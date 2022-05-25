const Search = () => {
	return (
		<div className="flex flex-col">
			<div className="bg-gray-50 flex items-center rounded-3xl px-4 py-2">
				<p>🔭</p>
				<input
					type="text"
					className=" border-none bg-gray-50 focus:outline-none"
					placeholder="type to search..."
				/>
			</div>
		</div>
	);
};

export default Search;
