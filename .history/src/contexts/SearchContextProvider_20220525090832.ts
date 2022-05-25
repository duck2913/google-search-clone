import { createContext, useState, useContext } from "react";

const ResultContext = createContext({});
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	async function getResults(type: "/video" | "/search" | "/images") {
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
};
export const useResultContext = () => useContext(ResultContext);
