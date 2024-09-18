/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				"onest": ["Onest Variable", "sans-serif"],
			}
		},
	},
	plugins: [animations, require('flowbite/plugin')],
}
