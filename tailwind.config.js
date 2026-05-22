/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EE',
        ink: '#1C1917',
        muted: '#78716C',
        faint: '#B0A89E',
        border: '#DDD8CF',
        accent: {
          yellow: '#FFB800',
          green:  '#2A9D5C',
          coral:  '#E85D3C',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        handwritten: ['"Caveat"', 'cursive'],
      },
    },
  },
  plugins: [],
}
