/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#ECF4FF',
        'custom-secondary': '#D7DDD9',
        'custom-txt': '#0F1321',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],

  daisyui: {
    themes: ['light'],
  },
};