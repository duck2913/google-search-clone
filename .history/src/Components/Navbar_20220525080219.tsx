import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="p-5 pb-0 flex flex-wrap justify-center items-center border-b dark:border-gray-700">
			<div className="flex justify-between items-center space-x-5 w-screen">
				<Link></Link>
			</div>
		</div>
	);
};
export default Navbar;
