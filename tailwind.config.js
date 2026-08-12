/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        madein: {
          cream: "#F7F4EE",
          creamLight: "#FAF8F5",
          creamCard: "#FFFFFF",
          creamBorder: "#E2DDD3",
          green: "#063D2C",
          greenHover: "#042B1F",
          greenLight: "#0D573F",
          greenSoft: "#E3EDE7",
          greenText: "#084B36",
          dark: "#111111",
          grayText: "#555555",
          grayBorder: "#D8D2C6",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'marquee': 'marquee 22s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(15px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};


