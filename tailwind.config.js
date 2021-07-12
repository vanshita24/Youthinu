module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Baloo', 'sans-serif'],
        chicle: ['ChicleRegular'],
        baloo: ['Baloo'],
      },
      colors: {
        'brand-video-purple': '#6e3088',
        'brand-red-light': '#ff005c',
        'brand-red-dark': '#c5064f',
        'brand-green-light': '#a7eb00',
        'brand-green-dark': '#a3ba24',
        'brand-blue-light': '#0dd2ff',
        'brand-blue-dark': '#00b3fe',
        'brand-purple-dark': '#7b32a8',
        'brand-purple-light': '#a443e2',
      },
      backgroundImage: (theme) => ({
        'confetti-doodles': "url('/images/bg/confetti-doodles.svg')",
        wave: "url('/images/bg/wave.svg')",
        'side-wave': "url('/images/bg/wave.png')",
        clouds: "url('/images/bg/clouds.svg')",
        blob: "url('/images/bg/blob.svg')",
      }),
      keyframes: {
        moveUpDown: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      animation: {
        'up-down': 'moveUpDown 2s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ['rounded'],
    display: ["group-hover"]
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
};
