import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Video = () => {
	const { getResults, results } = useContext(ResultContext);
	return <div>Video</div>;
};

export default Video;
