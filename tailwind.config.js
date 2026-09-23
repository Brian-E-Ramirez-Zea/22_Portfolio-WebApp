/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#1e1e2e',
        mantle: '#181825',
        crust: '#11111b',
        surface0: '#313244',
        surface1: '#45475a',
        surface2: '#585b70',
        text: '#cdd6f4',
        subtext0: '#a6adc8',
        subtext1: '#bac2de',
        blue: '#89b4fa',
        green: '#a6e3a1',
        yellow: '#f9e2af',
        mauve: '#cba6f7',
        peach: '#fab387',
        red: '#f38ba8',
        teal: '#94e2d5',
        sapphire: '#74c7ec',
        lavender: '#b4befe',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-green': '0 0 12px rgba(166, 227, 161, 0.45)',
        'glow-blue': '0 0 12px rgba(137, 180, 250, 0.45)',
        'subtle-card': '0 4px 20px -2px rgba(17, 17, 27, 0.65)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

