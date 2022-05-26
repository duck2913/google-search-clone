import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
	const { results, searchTerm, getResults } = useContext(ResultContext);

	useEffect(() => {
		const timer = setTimeout(() => {
			getResults("/search", searchTerm);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [searchTerm, getResults]);

	return (
		<div className="grid grid-cols-2 p-10">
			{results?.map(({ title, link, description }, index) => (
				<div key={index} className="p-6">
					<p className="text-xs">{link}</p>
					<a href={link} className="text-xl text-blue-500 dark:text-blue-300">
						{title}
					</a>
					<p className="mt-5 text-base">{description}</p>
				</div>
			))}
		</div>
	);
};

export default Results;
