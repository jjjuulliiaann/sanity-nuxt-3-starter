// documents
import project from './documents/collections/project'
import page from './documents/collections/page'
import pageHome from './documents/singletons/pageHome'
import pageProjects from './documents/singletons/pageProjects'
import siteNav from './documents/site/siteNav'
import siteOptions from './documents/site/siteOptions'
// content
import editorText from './content/editors/editorText'
import editorTextMedia from './content/editors/editorTextMedia'
// objects
import link from './objects/link'
import internalLink from './objects/internalLink'
import picture from './objects/picture'
import pictureTitled from './objects/pictureTitled'
import seo from './objects/seo'
import video from './objects/video'
import videoPlayer from './objects/videoPlayer'

export const schemaTypes = [
	project,
	page,
	pageHome,
	pageProjects,
	siteNav,
	siteOptions,
	editorText,
	editorTextMedia,
	link,
	internalLink,
	picture,
	pictureTitled,
	seo,
	video,
	videoPlayer,
]
