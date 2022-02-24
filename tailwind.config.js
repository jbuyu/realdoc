module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        128: '66vh',
        129: '22rem',
        130: '24rem',
        132: '28rem',
      },
      width:{
        130:'22rem',
      },
      maxWidth: {
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}
