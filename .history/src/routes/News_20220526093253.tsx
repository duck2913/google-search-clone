import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const News = () => {
	const { searchTerm, getResults, results } = useContext(ResultContext);
	useEffect(() => {
		const timer = setTimeout(() => {
			searchTerm && getResults("/news", searchTerm);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [searchTerm, getResults]);

	return (
		<div className="grid grid-cols-2 p-10">
			{results &&
				results.map((news, index) => (
					<div key={index} className="p-5">
						<a href={news.link} className="text-2xl text-blue-500 dark:text-blue-300">
							{news.title}
						</a>
						<p className="text-sm break-words">{news.link}</p>
					</div>
				))}
		</div>
	);
};

export default News;
