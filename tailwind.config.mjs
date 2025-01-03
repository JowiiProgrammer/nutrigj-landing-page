import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'nutrigj-primary': '#94C747', // Color principal (verde)
        'nutrigj-secondary': '#00ADB5', // Color secundario (azul)
        'nutrigj-black': '#1A1A1A', // Negro profundo
        'nutrigj-gray': '#F3F4F6', // Fondo claro
      },Family: {
        sans: ['Inter Variable', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
}