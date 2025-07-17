/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#C6722F', // Color principal modo claro
          dark: '#D9A22F',  // Color principal modo oscuro
        },
        // Paleta modo claro
        light: {
          bg: '#FFFFFF',
          text: {
            primary: '#1A1A1A',
            secondary: '#333333',
            tertiary: '#666666',
            muted: '#999999',
          },
          accent: '#C6722F',
          border: '#CCCCCC',
          hover: '#222222',
        },
        // Paleta modo oscuro
        dark: {
          bg: '#000000',
          text: {
            primary: '#F8F8F8',
            secondary: '#CCCCCC',
            tertiary: '#999999',
            muted: '#666666',
          },
          accent: '#D9A22F',
          border: '#333333',
          hover: '#CCCCCC',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 