import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Images = () => {
	const { getResults, searchTerm } = useContext(ResultContext);

	useEffect(() => {
		getResults();
	}, [getResults, searchTerm]);

	return <div>Images</div>;
};

export default Images;
