/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep midnight blue base
        midnight: {
          50: '#e6e8ef',
          100: '#c1c6d7',
          200: '#98a1bd',
          300: '#6e7ca3',
          400: '#4f618f',
          500: '#30467b',
          600: '#2b3f73',
          700: '#243568',
          800: '#1e2c5e',
          900: '#0f172a',
          950: '#080d19',
        },
        // Emerald/Cyan accent
        accent: {
          emerald: '#10b981',
          cyan: '#06b6d4',
          teal: '#14b8a6',
        },
        // Magenta highlights
        highlight: {
          magenta: '#e11d9b',
          pink: '#ec4899',
          purple: '#a855f7',
        },
        // Premium golds
        premium: {
          gold: '#fbbf24',
          amber: '#f59e0b',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-cyan': 'glow-cyan 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(16, 185, 129, 0.5), 0 0 10px rgba(16, 185, 129, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 30px rgba(16, 185, 129, 0.5)' },
        },
        'glow-cyan': {
          '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5), 0 0 10px rgba(6, 182, 212, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 30px rgba(6, 182, 212, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

