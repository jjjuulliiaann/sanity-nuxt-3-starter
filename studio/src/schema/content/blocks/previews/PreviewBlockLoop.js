import React from 'react'

export const PreviewBlockLoop = ({ value }) => {
	if (!value) return null
	const { _type, playbackId, duration } = value

	const thumbnail = `https://image.mux.com/${playbackId}/animated.gif`
	// duration string
	let minutes = Math.floor(duration / 60)
	minutes = minutes >= 10 ? minutes : `0${minutes}`
	let seconds = Math.floor(duration % 60)
	seconds = seconds >= 10 ? seconds : `0${seconds}`
	const durationString = `${minutes}:${seconds}`

	return playbackId ? (
		<div style={{ padding: '0.5rem' }}>
			<h3
				style={{
					display: 'block',
					margin: '0 0 1rem 0',
					fontSize: '1rem',
					fontWeight: 600,
				}}
			>
				Loop&nbsp;
				<span style={{ fontWeight: 350, color: '#51637f' }}>
					({durationString})
				</span>
			</h3>
			<img
				style={{
					display: 'block',
					width: 'auto',
					height: 'auto',
					maxHeight: '10rem',
				}}
				src={thumbnail}
			/>
		</div>
	) : (
		<div style={{ padding: '0.5rem' }}>Empty Loop</div>
	)
}
