import {renderHeadline1, renderHeadline2, renderSmall} from './renders.jsx'

// Define Hierarchie of text
export const styles = [
	{title: 'Regular', value: 'normal'},
	{
		title: 'Headline 1',
		value: 'h2',
		blockEditor: {
			render: renderHeadline1,
		},
	},
	{
		title: 'Headline 2',
		value: 'h3',
		blockEditor: {
			render: renderHeadline2,
		},
	},
	{
		title: 'Small',
		value: 'small',
		blockEditor: {
			render: renderSmall,
		},
	},
]
