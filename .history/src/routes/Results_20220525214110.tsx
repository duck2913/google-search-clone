import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Results = () => {
	const { results } = useContext(ResultContext);

	return <div>Search results</div>;
};

export default Results;
