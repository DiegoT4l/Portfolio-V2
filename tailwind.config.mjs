/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],

	darkMode: 'class',

	safelist: [
		'w-64',
		'w-1/2',
		'rounded-l-lg',
		'rounded-r-lg',
		'bg-gray-200',
		'grid-cols-4',
		'grid-cols-7',
		'h-6',
		'leading-6',
		'h-9',
		'leading-9',
		'shadow-lg'
	],

	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			fontFamily: {
				onest: ["Onest Variable", "sans-serif"],
				suse: ["SUSE Variable", "sans-serif"],
			},
			colors: {
				instagram: {
					100: '#feda75',
					200: '#fa7e1e',
					300: '#d62976',
					400: '#962fbf',
					500: '#4f5bd5',
				},
			}
		},
	},
	plugins: [animations, require('flowbite/plugin')],
}
