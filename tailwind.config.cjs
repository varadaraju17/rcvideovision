/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020c1b",    // Dark Navy
        secondary: "#ccd6f6",  // Lightest Slate
        accent: {
          DEFAULT: "#64ffda", // Electric Cyan
          hover: "#4bdbc0",   // Slightly darker Cyan
        },
        surface: "#112240",    // Light Navy
        "surface-hover": "#233554",
        navy: {
          dark: "#020c1b",
          light: "#112240",
          lighter: "#233554",
        },
        slate: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          lightest: "#ccd6f6",
        },
        white: "#e6f1ff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to bottom right, #020c1b, #112240)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
