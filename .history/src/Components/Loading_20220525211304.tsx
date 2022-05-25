import { Puff } from "react-loader-spinner";

const Loading = () => {
	return (
		<div className="flex justify-center items-center">
			<Puff color="#00bfff" height={550} />
		</div>
	);
};

export default Loading;
