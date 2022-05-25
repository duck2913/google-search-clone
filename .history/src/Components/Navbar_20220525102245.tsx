import { Link } from "react-router-dom";
import Search from "./Search";

interface Props {
	darkTheme: boolean;
	setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setDarkTheme, darkTheme }: Props) => {
	return (
		<div className="p-5 flex flex-wrap justify-between items-center border-b dark:border-gray-700">
			<div className="flex justify-between items-center space-x-5 w-screen">
				<Link to="/">
					<p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-white-500">
						Google🔍
					</p>
				</Link>
				<Search />
				<button
					className="text-xl dark:bg-gray-50 bg-white border rounded-full px-3 py-1 dark:text-slate-800"
					onClick={() => {
						setDarkTheme((curTheme) => !curTheme);
					}}
				>
					{darkTheme ? "Light 💡" : "Dark 🌛"}
				</button>
			</div>
		</div>
	);
};
export default Navbar;
