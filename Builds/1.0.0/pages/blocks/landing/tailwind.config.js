module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
}
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
       'hero-pattern': "C:\Users\louis\Documents\GitHub\Student-Survival-Store\images\Moving-and-Storage-Services-for-International-Students-in-London.jpg",
       'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  }
}
module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brandgreen: {
        light: '#a9ff22',
        DEFAULT: '#a9ff22',
        dark: '#a9ff22',
      }
    }
  }
}
