import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
	const { results, searchTerm, getResults } = useContext(ResultContext);

	useEffect(() => {
		getResults("/search", searchTerm);
	}, [searchTerm, getResults]);

	return (
		<div className="grid grid-cols-2 p-10">
			{results?.map(({ title, link }, index) => (
				<div key={index} className="p-6">
					<p>{link}</p>
					<a href={link} className="text-xl text-blue-500 dark:text-blue-300">
						{title}
					</a>
				</div>
			))}
		</div>
	);
};

export default Results;
