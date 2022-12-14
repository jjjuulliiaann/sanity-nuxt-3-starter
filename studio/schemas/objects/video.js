import React from 'react'
import {BiMovie} from 'react-icons/bi/'
import VideoPreview from '@/components/VideoPreview.jsx'
import {getDurationString} from '@/utils/helperFunctions'

export default {
	name: 'video',
	title: 'Video',
	type: 'object',
	icon: BiMovie,
	fields: [
		{
			title: 'Video',
			name: 'muxVideo',
			type: 'mux.video',
		},
		{
			title: 'Poster Image',
			description: 'Optional (visible before playing)',
			name: 'posterImage',
			type: 'image',
		},
	],
	components: {
		preview: VideoPreview,
	},
	preview: {
		select: {
			playbackId: 'muxVideo.asset.playbackId',
			tracks: 'muxVideo.asset.data.tracks',
			duration: 'muxVideo.asset.data.duration',
			poster: 'posterImage.asset',
		},
		prepare(selection) {
			const {playbackId, tracks, duration, poster} = selection
			const durationString = getDurationString(duration)
			// dimensions
			const videoTrack = tracks?.find((el) => el.type === 'video')
			const videoWidth = videoTrack ? videoTrack.max_width : undefined
			const videoHeight = videoTrack ? videoTrack.max_height : undefined
			// return
			return {
				title: 'Video',
				subtitle: videoTrack
					? `${durationString} (${videoWidth}px × ${videoHeight}px)`
					: durationString,
				media: BiMovie,
				poster: poster,
				playbackId: playbackId,
			}
		},
	},
}
