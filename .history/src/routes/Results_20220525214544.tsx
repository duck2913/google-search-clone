import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
	const { results } = useContext(ResultContext);

	return (
		<div>
			{results?.results?.map(({ title, link }, index) => (
				<div key={index}></div>
			))}
		</div>
	);
};

export default Results;
