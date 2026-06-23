/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 1.5s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      colors: {
        'baby-pink': '#FFE8F1',
        'blush-pink': '#FFD6E7',
        'cream-white': '#FFF9F4',
        'lavender': '#EEE6FF',
        'peach': '#FFE4D6',
        'champagne-gold': '#F4D58D',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
        handwriting: ['"Dancing Script"', 'cursive'],
      },
      backgroundImage: {
        'dreamy-gradient': 'linear-gradient(to bottom right, #FFE8F1, #EEE6FF, #FFF9F4)',
        'sky-gradient': 'linear-gradient(to bottom, #FFE8F1, #EEE6FF)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(255, 214, 231, 0.5)',
        'glow': '0 0 15px rgba(255, 214, 231, 0.8)',
      }
    },
  },
  plugins: [],
}