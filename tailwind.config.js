/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./custom.css',
		// './node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				'rubik-mono': ['Rubik Mono One', 'monospace'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				'technovation-primary': '#1D1349',
				'technovation-secondary': '#43B02A',
			},
		},
	},
	// plugins: [require('flowbite/plugin')],
};
// module.exports = {
// 	content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure Tailwind scans your files
// 	theme: {
// 		extend: {
// 			fontFamily: {
// 				'rubik-mono': ['Rubik Mono One', 'monospace'],
// 				poppins: ['Poppins', 'sans-serif'],
// 			},
// 			colors: {
// 				'technovation-primary': '#1D1349',
// 				'technovation-secondary': '#43B02A',
// 			},
// 		},
// 	},
// 	plugins: [],
// };
