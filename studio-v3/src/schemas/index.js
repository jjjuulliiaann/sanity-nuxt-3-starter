// documents
import project from './documents/collections/project'
import pageText from './documents/collections/pageText'
import pageHome from './documents/singletons/pageHome'
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
	pageText,
	pageHome,
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
