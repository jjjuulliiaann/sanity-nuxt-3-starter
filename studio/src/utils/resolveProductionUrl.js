const baseUrl = process.env.SANITY_STUDIO_FRONTEND_URL;
const urlQuery = "?preview=true";

export default function resolveProductionUrl(document) {
	// set slug to empty string if no slug exists
	let slug = document.slug ? document.slug?.current : "";
	// return undefined if no current slug is set
	if (typeof slug === "undefined") {
		return undefined;
	}

	// review production url according to frontend route setup (check for trailing slash!)
	if (document._type === "project") {
		return `${baseUrl}/projects/${slug}/${urlQuery}`;
	}
	return `${baseUrl}/${slug}/${urlQuery}`;
}
