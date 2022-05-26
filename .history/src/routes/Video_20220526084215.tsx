import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Video = () => {
	const { getResults, results, searchTerm } = useContext(ResultContext);

	useEffect(() => {
		getResults("/video", searchTerm);
	}, []);

	return <div>Video</div>;
};

export default Video;
