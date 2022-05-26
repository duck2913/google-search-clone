import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const News = () => {
	const { searchTerm, getResults, results } = useContext(ResultContext);
	useEffect(() => {
		getResults("/news", searchTerm);
	}, [searchTerm, getResults]);

	return (
		<div className="grid grid-cols-2 p-10">
			{results &&
				results.map((img, index) => (
					<div key={index} className="p-5">
						<a href={img.link} className="text-2xl text-blue-500 dark:text-blue-300">
							{img.title}
						</a>
						<p className="text-sm break-words">{img.link}</p>
					</div>
				))}
		</div>
	);
};

export default News;
