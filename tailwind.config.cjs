/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'headeer-outline': 'hsl(217, 16%, 45%)'
      },
      backgroundImage: {
        'radial-grad': 'radial-gradient(hsl(214, 47%, 23%),hsl(237, 49%, 15%))',
        'scissors-gr': 'radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'paper-gr': 'radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'rock-gr': 'radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'lizzard-gr': 'radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
        'spock-gr': 'radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
        'triangle-img': 'url(./assets/bg-triangle.svg)',
        'pentagon-img': 'url(./assets/bg-pentagon.svg)'
      },
      backgroundSize: {
        desktop: '60%'
      },
      boxShadow: {
        'inner-3d-down': 'inset 0rem -0.3rem rgba(0, 0, 0, 0.3)',
        'inner-3d-up': 'inset 0rem 0.3rem rgba(0, 0, 0, 0.1)',
        winner:
          '0px 0px 1px 40px rgba(100, 100, 100, 0.1), 0px 0px 1px 80px rgba(100 100, 100, 0.1),  0px 0px 1px 120px rgba(100 100, 100, 0.1);'
      }
    }
  },
  plugins: []
};
