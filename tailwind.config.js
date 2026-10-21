/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Gruvbox Dark palette — https://github.com/morhetz/gruvbox
      colors: {
        background: "#1d2021", // bg0_h
        base: "#1d2021",
        surface: "#282828", // bg0
        surfacealt: "#3c3836", // bg1
        primary: "#fabd2f", // yellow
        secondary: "#fe8019", // orange
        accent: "#b8bb26", // green
        teal: "#8ec07c", // aqua
        textmain: "#ebdbb2", // fg
        white: "#ebdbb2",
        gray: {
          100: "#fbf1c7",
          200: "#ebdbb2",
          300: "#d5c4a1",
          400: "#bdae93",
          500: "#a89984",
          600: "#928374",
          700: "#665c54",
          800: "#504945",
          900: "#3c3836",
        },
        red: {
          400: "#fb4934",
          500: "#cc241d",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        space: ['"IBM Plex Mono"', 'monospace'], // Headings
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        xl: '6px',
        '2xl': '8px',
        '3xl': '10px',
      },
      animation: {
        'floating': 'floating 6s ease-in-out infinite',
        'floating-slow': 'floating 8s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        orbit: {
          'from': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          'to': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)', boxShadow: '0 0 20px rgba(250, 189, 47, 0.2)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)', boxShadow: '0 0 40px rgba(250, 189, 47, 0.4)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}


