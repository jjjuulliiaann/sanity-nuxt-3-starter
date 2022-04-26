// imports
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
// documents
import project from "./documents/collections/project";
import templateHome from "./documents/pages/templateHome";
import templateProjects from "./documents/pages/templateProjects";
import templateText from "./documents/pages/templateText";
import siteOptions from "./documents/singletons/siteOptions";
import siteNavigation from "./documents/singletons/siteNavigation";
// objects
import contentText from "./objects/content/contentText";
import contentParagraph from "./objects/content/contentParagraph";
import contentFull from "./objects/content/contentFull";
import blockImage from "./objects/content/blocks/blockImage";
import blockLoop from "./objects/content/blocks/blockLoop";
import link from "./objects/link";
import picture from "./objects/picture";
import seo from "./objects/seo";
import video from "./objects/video";

export default createSchema({
	name: "default",
	types: schemaTypes.concat([
		// documents
		project,
		templateHome,
		templateProjects,
		templateText,
		siteOptions,
		siteNavigation,
		// objects
		contentText,
		contentParagraph,
		contentFull,
		blockImage,
		blockLoop,
		link,
		picture,
		seo,
		video,
	]),
});
