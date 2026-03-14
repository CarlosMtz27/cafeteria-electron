/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primario: {
          DEFAULT: '#1565C0',
          oscuro:  '#0D2137',
        },
      },
    },
  },
  plugins: [],
}