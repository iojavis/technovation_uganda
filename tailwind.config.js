/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./custom.css',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
