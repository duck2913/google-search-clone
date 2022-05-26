import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const News = () => {
	const { searchTerm, getResults, results } = useContext(ResultContext);
	useEffect(() => {
		getResults("/news", searchTerm);
	}, []);
	return (
		<div className="grid grid-cols-2 p-10">
			{results?.entries.map(({ title, link, id }) => (
				<div key={id}>
					<p className="text-2xl text-blue-500 dark:text-blue-300">{title}</p>
				</div>
			))}
		</div>
	);
};

export default News;
