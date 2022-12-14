import React from 'react'
import {BiMoviePlay} from 'react-icons/bi/'
import VideoPreview from '@/components/VideoPreview.jsx'
import {getDurationString} from '@/utils/helperFunctions'

export default {
	name: 'videoPlayer',
	title: 'Video Player',
	type: 'object',
	icon: BiMoviePlay,
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
				title: 'Video Player',
				subtitle: videoTrack
					? `${durationString} (${videoWidth}px × ${videoHeight}px)`
					: durationString,
				media: BiMoviePlay,
				poster: poster,
				playbackId: playbackId,
			}
		},
	},
}
