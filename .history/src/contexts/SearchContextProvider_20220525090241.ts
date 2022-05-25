import { createContext, useState } from "react";

const ResultContext = createContext({});
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1/";

const ResultContextProvider = ({ children }) => {
	const [results, setResults] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	async function getResults(type: "video" | "search" | "images") {
		setIsLoading(true);
		const res = await fetch();
	}
};
