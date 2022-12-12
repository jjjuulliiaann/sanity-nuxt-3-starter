import React from 'react'
import resolveProductionUrl from './resolveProductionUrl'

const PreviewComponent = ({ document }) => {
	const { displayed } = document
	const targetURL = resolveProductionUrl(document.displayed, true)

	return (
		<iframe
			src={targetURL}
			frameBorder={0}
			width="100%"
			height="100%"
			style={{ position: 'absolute', inset: 0 }}
		/>
	)
}

export default PreviewComponent
