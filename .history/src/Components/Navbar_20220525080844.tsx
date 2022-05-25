import { Link } from "react-router-dom";

interface Props {
	setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setDarkTheme }: Props) => {
	return (
		<div className="p-5 pb-0 flex flex-wrap justify-center items-center border-b dark:border-gray-700">
			<div className="flex justify-between items-center space-x-5 w-screen">
				<Link to="/">
					<p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-500">
						Google🔍
					</p>
					<button
						onClick={() => {
							setDarkTheme;
						}}
					></button>
				</Link>
			</div>
		</div>
	);
};
export default Navbar;
