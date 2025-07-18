/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#944E0F', // Color principal modo claro más oscuro para mejor contraste
          dark: '#FFB833',  // Color principal modo oscuro más brillante para mejor contraste
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
          accent: '#944E0F', // Actualizado para coincidir con primary.light
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
          accent: '#FFB833', // Actualizado para coincidir con primary.dark
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