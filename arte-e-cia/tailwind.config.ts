import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
<<<<<<< HEAD
        'black': '#000'
=======
        transparent: 'transparent',
        current: 'currentColor',
        'black': '#000',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'gray': '#111827'
>>>>>>> 2e2481ea93eed0812e3b3d38cd5af56641f8e0b4
      },
    },
  },
  plugins: [],
} satisfies Config;
