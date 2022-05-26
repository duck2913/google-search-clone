import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const News = () => {
	const { searchTerm, getResults } = useContext(ResultContext);
	useEffect(() => {
		getResults("/news", searchTerm);
	}, []);
	return <div>News</div>;
};

export default News;
