import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Video = () => {
	const { getResults, results, searchTerm } = useContext(ResultContext);

	useEffect(() => {
		getResults("/video", searchTerm);
	}, [getResults, searchTerm]);

	return <div className="p-10 grid">Video</div>;
};

export default Video;
