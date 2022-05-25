import { Puff } from "react-loader-spinner";

const Loading = () => {
	return (
		<div className="flex justify-center items-center">
			<Puff color="#00bfff" height={600} width={100} />
			&nbsp;
		</div>
	);
};

export default Loading;
