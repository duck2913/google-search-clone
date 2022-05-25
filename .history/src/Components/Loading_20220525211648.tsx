import { Puff } from "react-loader-spinner";

const Loading = () => {
	return (
		<div className="flex justify-center items-center">
			<Puff color="#00bfff" height={1050} width={200} />
			&nbsp;
		</div>
	);
};

export default Loading;
