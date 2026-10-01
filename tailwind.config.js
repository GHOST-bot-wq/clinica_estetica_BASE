/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        bone: '#F2ECE3',
        nude: '#DCC8B6',
        'nude-deep': '#B89C86',
        champagne: '#CDBA96',
        'champagne-deep': '#7D6A47',
        ink: '#1F1B18',
        night: '#25201C',
        muted: '#6B625B',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        scrollLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.035)' },
        },
      },
      animation: {
        'scroll-line': 'scrollLine 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite',
        breathe: 'breathe 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
