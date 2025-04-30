/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: '#F6FAFD',
          card: '#FFFFFF',
        },
        foreground: {
          DEFAULT: '#1A3557',
          muted: '#4B5C6B',
        },
        primary: {
          DEFAULT: '#2A7AC3',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F6FAFD',
          foreground: '#2A7AC3',
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: '#F49B2D',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 0px 0px #2A7AC3, 0 0 0px 0px #F49B2D, 0 0 0px 0px #fff',
            filter: 'brightness(1)',
          },
          '40%': {
            boxShadow: '0 0 24px 8px #2A7AC3, 0 0 48px 16px #F49B2D, 0 0 64px 24px #fff',
            filter: 'brightness(1.18)',
          },
          '60%': {
            boxShadow: '0 0 32px 12px #2A7AC3, 0 0 64px 24px #F49B2D, 0 0 96px 32px #fff',
            filter: 'brightness(1.22)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        glow: 'glow 1.8s ease-in-out infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        noise: "url('/noise.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
