/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'pembe' : '#F72585',
        'koyu-pmb':'#B5179E',
        'mavi-pmb': '#7209B7',
        'chry-mavi': '#560BAD',
        'koyu-mavi':'#480CA8',
        'zafre-mavi':'#3AOCA3',
        'pfalz-mavi':'#3F37C9',
        'neon-mavi':'#4361EE',
        'safsavan-mavi':'#4895EF',
        'gkyz-mavi':'#4CC9F0',
      }
    },
  },
  plugins: [],
}