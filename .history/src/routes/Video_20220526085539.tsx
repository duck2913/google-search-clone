import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";
import ReactPlayer from "react-player";
const Video = () => {
	const { getResults, results, searchTerm } = useContext(ResultContext);

	useEffect(() => {
		getResults("/video", searchTerm);
	}, [getResults, searchTerm]);

	return (
		<div className="p-10 grid-cols-2 grid gap-10">
			{results.map((video, index) => (
				<ReactPlayer key={index} url={src} controls />
			))}
		</div>
	);
};

export default Video;
