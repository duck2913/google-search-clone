import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Images = () => {
	const { getResults, searchTerm, results } = useContext(ResultContext);

	useEffect(() => {
		getResults("/image", searchTerm);
	}, [getResults, searchTerm]);

	return (
		<div className="grid grid-cols-6 gap-5 p-10">
			{/* {results?.map(({ image: { src } }, index) => (
				<div key={index}>
					<img src={src} alt="" loading="lazy" />
				</div>
			))} */}
		</div>
	);
};

export default Images;
