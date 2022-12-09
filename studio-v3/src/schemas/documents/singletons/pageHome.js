import {BiHome} from 'react-icons/bi/'

export default {
	title: 'Home',
	name: 'pageHome',
	type: 'document',
	icon: BiHome,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Content',
			name: 'content',
			type: 'editorTextMedia',
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Home',
				media: BiHome,
			}
		},
	},
}
