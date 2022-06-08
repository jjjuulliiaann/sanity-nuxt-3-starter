import React from "react";

// Render custom content in Editor
export const renderHeadline = ({ children }) => (
	<span style={{ fontWeight: "bold", fontSize: "1rem" }}>{children}</span>
);

export const renderSmall = ({ children }) => (
	<span style={{ fontSize: "0.8rem", lineHeight: 0.8 }}>{children}</span>
);
