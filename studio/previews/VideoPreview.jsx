import React from 'react'
import { Stack, Box } from '@sanity/ui'
import { useSanityClient } from '@/utils/helperFunctions'
import imageUrlBuilder from '@sanity/image-url'

export default function VideoPreview(props) {
	const {poster, playbackId, ...restProps} = props
	
	const client = useSanityClient()
	const builder = imageUrlBuilder(client)
	const urlFor = (source) => builder.image(source)

	// create thumbnail url
	const thumbnailUrl = poster
		? urlFor(poster).width(500).url()
		: playbackId
		? `https://image.mux.com/${playbackId}/animated.gif`
		: undefined

	// create miniature icon
	if(props.layout !== 'block') {
		restProps.media = (<img 
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				objectFit: 'cover',
			}}
			src={thumbnailUrl} />)
	}

	return props.layout === 'block'
		? (
		<Stack space={2}>
		  {props.renderDefault(restProps)}
		  { thumbnailUrl !== undefined ? (
		  <Box padding={1}>
		  <img
				style={{
					display: 'block',
					width: 'auto',
					height: 'auto',
					maxHeight: '10rem',
				}}
				alt=""
				src={thumbnailUrl}
			/>
		</Box>
		) : ("") }
		</Stack>
	  )
	  : props.renderDefault(restProps)
}
