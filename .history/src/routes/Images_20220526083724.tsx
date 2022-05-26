import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Images = () => {
	const { getResults, searchTerm, results } = useContext(ResultContext);

	useEffect(() => {
		getResults("/image", searchTerm);
	}, [getResults, searchTerm]);

	return (
		<div className="grid grid-cols-6">
			{results?.map(({ image: { src }, link }, index) => (
				<div key={index}>
					<img src={link} alt="" />
				</div>
			))}
		</div>
	);
};

export default Images;
