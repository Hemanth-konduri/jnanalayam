/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        lamaSky:"#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple:"#CFCEFF",
        lamaPurpleLight:"#F1F0FF",
        lamaGrayDark:"#4B5563",
        lamaYellow:"#FAE27C",
        lamaYellowLight:"#FEFCE8",
        lamaGreen:"#10B981",
      }
    },
  },
  plugins: [],
};
