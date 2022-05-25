import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="p-5 pb-0 flex flex-wrap justify-center items-center border-b dark:border-gray-700">
			<div className="flex justify-benter items-center space-x-5 w-screen">
				<Link to="/">
					<p className="text-2xl">Google</p>
				</Link>
			</div>
		</div>
	);
};
export default Navbar;
