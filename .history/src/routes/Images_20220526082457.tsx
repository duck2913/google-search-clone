import { useContext, useEffect } from "react";
import { ResultContext } from "../contexts/ResultContextProvider";

const Images = () => {
	const { setResults, searchTerm } = useContext(ResultContext);

    useEffect(() => {
       setResults()  
    },[])

	return <div>Images</div>;
};

export default Images;
