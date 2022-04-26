import React from "react";
import resolveProductionUrl from "./resolveProductionUrl";

const PreviewComponent = ({ document }) => {
	const { displayed } = document;
	const targetURL = resolveProductionUrl(document.displayed);

	return (
		<iframe src={targetURL} frameBorder={0} width="100%" height="100%" />
	);
};

export default PreviewComponent;
