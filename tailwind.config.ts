import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class', // Enable class-based dark mode
	theme: {
		extend: {
			backgroundImage: {
				'custom-gradient':
					'linear-gradient(270.16deg, #FFB147 5.74%, #FF6C63 50.64%, #B86ADF 92.05%)',
			},
			colors: {
				'custom-gradient': {
					from: '#FFB147',
					mid: '#FF6C63',
					to: '#B86ADF',
				},
			},
		},
	},
	plugins: [],
};
export default config;
