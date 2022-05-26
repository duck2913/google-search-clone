import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Video = () => {
	const { getResults, results } = useContext(ResultContext);

	useEffect(() => {}, []);
	return <div>Video</div>;
};

export default Video;
