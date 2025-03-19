export const theme = {
	colors: {
		primary: '#2f5b50',
		primaryLight: '#e0f0bc',
		success: '#28a745',
		danger: '#dc3545',
		warning: '#ffc107',
		white: '#ffffff',
		black: '#000000',
		text: {
			primary: '#212529',
			secondary: '#6c757d',
		},
		background: '#ffffff',
		muted: '#dee2e6',
	},
	typography: {
		fontFamily: {
			sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
			mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		},
		fontSize: {
			xs: '0.75rem', // 12px
			sm: '0.875rem', // 14px
			md: '1rem', // 16px
			lg: '1.125rem', // 18px
			xl: '1.25rem', // 20px
			'2xl': '1.5rem', // 24px
			'3xl': '1.875rem', // 30px
			'4xl': '2.25rem', // 36px
			'5xl': '3rem', // 48px
		},
		fontWeight: {
			normal: 400,
			medium: 500,
			bold: 700,
			black: 900,
		},
		lineHeight: {
			none: 1,
			tight: 1.2,
			snug: 1.375,
			normal: 1.5,
			relaxed: 1.625,
			loose: 2,
		},
	},
	spacing: {
		0: '0',
		1: '0.25rem', // 4px
		2: '0.5rem', // 8px
		3: '0.75rem', // 12px
		4: '1rem', // 16px
		5: '1.25rem', // 20px
		6: '1.5rem', // 24px
		8: '2rem', // 32px
		10: '2rem', // 40px
		12: '3rem', // 48px
		16: '4rem', // 64px
		20: '5rem', // 80px
	},
	borderRadius: {
		none: '0', // 0px
		sm: '0.125rem', // 2px
		md: '0.25rem', // 4px
		lg: '0.5rem', // 8px
		full: '9999px', // Fully rounded (e.g., pill shape)
	},
	shadows: {
		sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
		md: '0 4px 6px rgba(0, 0, 0, 0.1)',
		lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
	},
	transitions: {
		default: 'all 0.2s ease-in-out',
	},
	breakpoints: {
		sm: "576px",
		md: "768px",
		lg: "992px",
		xl: "1200px",
	},
};
