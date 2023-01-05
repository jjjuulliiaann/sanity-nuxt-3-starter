import React from 'react'

// Render custom content in Editor
export const TextLg = ({ children }) => (
	<span
		style={{
			fontSize: '1.4rem',
			lineHeight: 1.1,
			fontWeight: 'bold',
		}}
	>
		{children}
	</span>
)

export const TextBold = ({ children }) => (
	<span
		style={{
			fontSize: '1rem',
			fontWeight: 'bold',
		}}
	>
		{children}
	</span>
)

export const TextSm = ({ children }) => (
	<span
		style={{
			fontSize: '0.7rem',
			lineHeight: '1rem',
		}}
	>
		{children}
	</span>
)
