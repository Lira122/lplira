/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#05060A", // Almost true black
        accent: "#6C4DFF",  // Main Purple
        glow: "#8A7CFF",    // Glow Purple
        secondary: "#00C2FF",// Support Blue
        background: "#05060A", // Match primary for super dark theme
        foreground: "#FFFFFF", // White
        grayText: "#A0A3BD", // Text gray
        dark: "#030408" // Slightly darker than primary for deep cards
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
        drama: ['"Instrument Serif"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
