/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        drip: {
          orange: {
            DEFAULT: "#F15A00",
            dark: "#E55401",
            light: "#FF7A28",
            subtle: "#FFF4EE",
            hover: "#D44D00"
          },
          charcoal: {
            DEFAULT: "#121212",
            light: "#1E1E1E",
            muted: "#2D2D2D"
          },
          gray: {
            surface: "#F8F9FA",
            border: "#E5E7EB",
            muted: "#6B7280"
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'drip-sm': '0 2px 8px rgba(241, 90, 0, 0.08)',
        'drip-md': '0 4px 16px rgba(241, 90, 0, 0.12)',
        'drip-card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'drip-hover': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
