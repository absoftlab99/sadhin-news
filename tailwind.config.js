/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#155eef",
          "secondary": "#6938ef",
          "accent": "#F4F0F5",
          "neutral": "#2a323c",
          "base-100": "#ffffff",
          "info": "#3abff8",
          "success": "#086f54",
          "warning": "#dc6803",
          "error": "#f53249",
        },
      },
    ],
  },
  plugins: [require('daisyui'),],
};