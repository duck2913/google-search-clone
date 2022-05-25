import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
	const { results } = useContext(ResultContext);

	return (
		<div className="grid grid-cols-2 p-8">
			{results?.results?.map(({ title, link }, index) => (
				<div key={index} className="p-6">
					<p>{link}</p>
					<a href={link} className="text-xl text-blue-500">
						{title}
					</a>
				</div>
			))}
		</div>
	);
};

export default Results;
