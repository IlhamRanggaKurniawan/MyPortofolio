/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        'none': 'none',
        '500': '500px',
        '1000': '1000px',
        '2000': '2000px',
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Utility untuk perspective
        '.perspective-none': {
          perspective: 'none',
        },
        '.perspective-500': {
          perspective: '500px',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        // Utility untuk transform-style
        '.transform-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.transform-flat': {
          'transform-style': 'flat',
        },

        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.backface-visible': {
          'backface-visibility': 'visible',
        },

        '.rotate-x-180': {
          'transform': 'rotateX(180deg)',
        },
        '.rotate-x-90': {
          'transform': 'rotateX(90deg)',
        },

        '.bg-size-600': {
          'background-size': '600% 600%',
        },
        '.bg-position-inherit': {
          'background-position': 'inherit',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
