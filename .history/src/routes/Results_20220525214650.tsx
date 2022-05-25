import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
	const { results } = useContext(ResultContext);

	return (
		<div className="grid-cols-2">
			{results?.results?.map(({ title, link }, index) => (
				<div key={index}>
					<p>{link}</p>
					<p>{title}</p>
				</div>
			))}
		</div>
	);
};

export default Results;
