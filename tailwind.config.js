/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bodyBg: '#FFF8EC',
        bgNavBar: '#B31E2E',
        whiteColor: '#EBF3F6',
        hoverWhiteColor: '#6FA8BE',
        backgroundBody: '#FFF8EC',
        textColor: '#1C0507',
        paragrafoText: '#254653',
        bgButton: '#931926',
        textButton: '#FFD284',
        colorPText: '#132329',
        BgColorRed: '#37090E',
        ColorMap: '#D32437',
        pColorDarkRed: '#410B10',
        colorBorder: '#FFAE21',
      },
      important: true,
      boxShadow: {
        navBarShadow: '0px 0px 30000px 20000px rgba(0, 0, 0, 0.30)',
        mapBoxShadow: '-10px 10px 30px 7px rgba(47, 8, 12, 0.30);',
      },
      screens: {
        cell: '360px',
      },
    },
  },
  plugins: [],
}
