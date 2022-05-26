import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Images = () => {
	const { getResults, searchTerm, results } = useContext(ResultContext);

	useEffect(() => {
		getResults("/image", searchTerm);
	}, [getResults, searchTerm]);

	return <div>Images</div>;
};

export default Images;
