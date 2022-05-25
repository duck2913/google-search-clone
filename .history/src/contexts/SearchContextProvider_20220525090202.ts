import { createContext, useState } from "react";

const ResultContext = createContext({});

const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	async function getResults(type: "video" | "search" | "images") {
		setIsLoading(true);
	}
};
