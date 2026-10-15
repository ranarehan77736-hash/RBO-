/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rbo: {
          navy: "#09203B",
          darkNavy: "#061528",
          blueAccent: "#112D4E",
          gold: "#E8B84B",
          goldDark: "#C9A227",
          goldLight: "#F4CA68",
          bgLight: "#F8FAFC",
          cardBg: "#FFFFFF",
          textDark: "#1E293B",
          textMuted: "#64748B",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Poppins", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
