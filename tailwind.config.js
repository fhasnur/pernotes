/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-light': '#ECF4FF',
        'custom-txt-primary': '#0F1321',
        'custom-txt-secondary': '#ECF4FF',
        'custom-btn-primary': '#D7DDD9',
        'custom-btn-secondary': '#2657ED',
        'custom-btn-tertiary': '#242B41',
        'custom-btn-danger': '#FE0000',
        'custom-dark': '#0F1321',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'night'],
  },
};
