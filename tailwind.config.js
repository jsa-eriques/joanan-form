/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    screens: {
      mm: '320px', // 'min-width
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/mz/criativo-vendas/necktie-angle-pattern-vector-cartoon-pretty-wavy-lines-b5f550c08c0bdaf5050b2af8e6b6f0a8.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'sub-white': '#F5F5F5',
        'sub-black': '#101010',
        'sub-blue': '#00B9FD',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}
