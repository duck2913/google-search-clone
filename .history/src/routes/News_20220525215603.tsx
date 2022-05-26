import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const News = () => {
	const { searchTerm, getResults } = useContext(ResultContext);
	return <div>News</div>;
};

export default News;
