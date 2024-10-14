const BaseIcons = async ({ type, fillColor = "none", strokeColor = "#000", width, height, strokeWidth }) => {
	return (
		<>
			{type === "phone" && (
				<svg
					width={width}
					height={height}
					fill={fillColor}
					stroke={strokeColor}
					strokeWidth={strokeWidth}
					viewBox="0 0 48 48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M19.308 12.467a24.095 24.095 0 0 1-.881-4.384C18.27 6.602 16.977 5.5 15.488 5.5H8.58c-1.777 0-3.145 1.535-2.989 3.304 1.575 17.829 15.777 32.03 33.606 33.606 1.77.156 3.304-1.207 3.304-2.984v-6.16c0-2.248-1.102-3.536-2.583-3.693a24.095 24.095 0 0 1-4.384-.88 4.903 4.903 0 0 0-4.87 1.243l-2.957 2.957a31.27 31.27 0 0 1-12.599-12.599l2.957-2.957a4.903 4.903 0 0 0 1.244-4.87Z"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={strokeWidth}
					/>
				</svg>
			)}
			{type === "meeting" && (
				<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fillColor} stroke={strokeColor} viewBox="0 0 64 64">
					<path d="M11 54h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3zM23 54h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3zM35 54h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3zM11 43h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3zM23 43h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3zM35 43h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3zM47 43h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3zM11 32h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3zM23 32h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3zM35 32h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3zM47 32h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h4v3h-4v-3z" />
					<path d="M60 4h-7V3a3 3 0 1 0-6 0v1H17V3a3 3 0 1 0-6 0v1H4C1.789 4 0 5.789 0 8v52c0 2.211 1.789 4 4 4h56c2.211 0 4-1.789 4-4V8c0-2.211-1.789-4-4-4zM49 3a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0V3zM13 3a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0V3zm49 57a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V17h60v43zm0-45H2V8a2 2 0 0 1 2-2h7v4a3 3 0 1 0 6 0V6h30v4a3 3 0 1 0 6 0V6h7a2 2 0 0 1 2 2v7z" />
				</svg>
			)}
		</>
	)
}

export default BaseIcons
