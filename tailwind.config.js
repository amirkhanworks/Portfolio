/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: 'float 6s ease-in-out infinite',
        'modal-in': 'fadeZoomIn 0.25s ease-out forwards',
        pulseDot: 'pulseDot 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeZoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgba(34,211,238, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(34,211,238, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(34,211,238, 0)' },
        },
      },
      colors: {
        accent: '#38bdf8',           // Cyan for highlights
        background: '#0f172a',       // Dark navy background
        foreground: '#111827',       // Card/dark section background
        borderCyan: '#164e63',       // Subtle cyan border
        textPrimary: '#e2e8f0',      // Light text
        textSecondary: '#94a3b8',    // Dimmed text
      },
    },
  },
  plugins: [],
};
