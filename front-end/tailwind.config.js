module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('../images/PressShots/PressShot2.jpg')",
			},
			fontFamily: {
				bebasNeue: ['"Bebas Neue"'],
			},
			colors: {
				primary: "var(--color-accent-primary)",
				bg: "var(--color-bg-primary)",
				fg: "var(--color-fg-primary)",
				darkGray: "rgb(17,24,39)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
