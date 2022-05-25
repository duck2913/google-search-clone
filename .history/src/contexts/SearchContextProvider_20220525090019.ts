import { createContext, useState } from "react";

const ResultContext = createContext({});

const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState();
};
