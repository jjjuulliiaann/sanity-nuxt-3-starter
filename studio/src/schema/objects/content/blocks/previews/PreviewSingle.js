import React from 'react'
import { PreviewMedia } from './'

export function PreviewSingle({ value }) {
  if (!value) return null

  return (
    <div
      style={{
        display: 'block',
        padding: '0.5rem'
      }}
    >
      <PreviewMedia media={value} />
    </div>
  )
}
