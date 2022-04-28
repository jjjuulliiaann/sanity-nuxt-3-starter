// imports
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
// documents
import project from "./documents/collections/project";
import pageText from "./documents/collections/pageText";
import pageHome from "./documents/pages/pageHome";
import pageProjects from "./documents/pages/pageProjects";
import siteOptions from "./documents/site/siteOptions";
import siteNavigation from "./documents/site/siteNavigation";
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
		pageText,
		pageHome,
		pageProjects,
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
