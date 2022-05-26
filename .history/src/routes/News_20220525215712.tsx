import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const News = () => {
	const { searchTerm, getResults, results } = useContext(ResultContext);
	useEffect(() => {
		getResults("/news", searchTerm);
	}, []);
	return <div>News</div>;
};

export default News;
