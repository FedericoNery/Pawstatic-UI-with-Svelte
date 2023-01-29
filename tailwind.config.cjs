const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extends:{
			colors: {
				'blue-darken': '#545871',
				'gray-darken': '#9597A6',
				'blue-lighten': '#DADBE6',
				'gray-lighten': '#F0F1F7',
				'red-darken': '#B8817D',
				'skin-darken': '#EBD0CE',
				'red-lighten': '#E6DBDA',
				'skin-lighten': '#F7ECEB',
			  },
		},
		fontFamily: {
		  sans: ['Henriette-Heavy', 'sans-serif'],
		  serif: ['Henriette-Heavy', 'serif'],
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
