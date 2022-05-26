import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Images = () => {
	const { getResults, searchTerm, results } = useContext(ResultContext);

	useEffect(() => {
		getResults("/image", searchTerm);
	}, [getResults, searchTerm]);

	return <div className="grid grid-cols-6">{}</div>;
};

export default Images;
