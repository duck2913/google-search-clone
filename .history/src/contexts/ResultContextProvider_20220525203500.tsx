import { createContext, useEffect, useState } from "react";
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContext = createContext({});

function ResultContextProvider({ children }) {
	const [results, setResults] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState<string>("");

	async function getResults(type: "/video" | "/news" | "/images" | "search") {
		setIsLoading(true);
		const res = await fetch(`${baseUrl}${type}`, {
			method: "GET",
			headers: {
				"X-User-Agent": "desktop",
				"X-Proxy-Location": "EU",
				"X-RapidAPI-Host": "google-search3.p.rapidapi.com",
				"X-RapidAPI-Key": "e5a0e50ddbmsh09d456ae545928ap1e085fjsn4cf30a7b8d04",
			},
		});
		const data = await res.json();
		setResults(data);
		setIsLoading(false);
	}

	useEffect(() => {
		const timer = setTimeout();
	}, [searchTerm]);

	const ctx = {
		results: results,
		isLoading: isLoading,
		searchTerm: searchTerm,
		getResults: getResults,
	};

	return <ResultContext.Provider value={ctx}>{children}</ResultContext.Provider>;
}

export default ResultContextProvider;
