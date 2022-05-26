import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Images = () => {
	const { setResults } = useContext(ResultContext);

	return <div>Images</div>;
};

export default Images;
