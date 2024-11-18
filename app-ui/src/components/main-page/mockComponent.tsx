import useWindowSize from "./useWindowSize";

const MockComponent = () => {
	const windowSize = useWindowSize();
	return (
		<div data-testid="mock-component">
			<span data-testid="width">{windowSize.width}</span>
			<span data-testid="height">{windowSize.height}</span>
		</div>
	);
};

export default MockComponent;
