/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F4F2EA',
        'paper-alt': '#EFEDE3',
        ink: '#14130F',
        'ink-soft': '#2B2A24',
        muted: '#6B6A60',
        accent: '#6F8B2A',
        line: 'rgba(20,19,15,0.14)',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        editorial: '1240px',
      },
    },
  },
  plugins: [],
}
