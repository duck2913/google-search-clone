const Search = () => {
	return (
		<div className="flex flex-col">
			<div className="bg-gray-50 flex items-center">
				<p>🔭</p>
				<input
					type="text"
					className="px-4 py-2 border-none bg-gray-50 focus:outline-none"
					placeholder="type to search..."
				/>
			</div>
		</div>
	);
};

export default Search;
