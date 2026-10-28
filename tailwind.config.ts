import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        jade: {
          50: '#EEF5F2',
          100: '#D7E8E2',
          200: '#AFD2C8',
          300: '#7FB6A8',
          400: '#4F9687',
          500: '#2E7A6B',
          600: '#1F6F61',
          700: '#15564C',
          800: '#0F453D',
          900: '#0C3B35',
          950: '#082F2B',
        },
        clay: {
          50: '#FBF1EC',
          100: '#F5DED2',
          200: '#EABCA6',
          300: '#DE9678',
          400: '#D27450',
          500: '#C85A3A',
          600: '#A8432A',
          700: '#873522',
          800: '#6B2C1E',
          900: '#4C2118',
        },
        maize: {
          50: '#FDF8EA',
          100: '#FAEFC8',
          200: '#F5D68A',
          300: '#F0C664',
          400: '#EAB64C',
          500: '#D99B2F',
          600: '#B77B21',
          700: '#8F5C1B',
          800: '#6B4518',
          900: '#4A3014',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FBF7EF',
          200: '#F6EFE2',
          300: '#EEE3D0',
          400: '#E1D2B8',
        },
        ink: '#17211E',
        muted: '#5D6B65',
        rose: '#A83E5B',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        script: ['var(--font-caveat)', 'Segoe Script', 'cursive'],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(8, 47, 43, 0.35)',
        card: '0 28px 70px -40px rgba(8, 47, 43, 0.45)',
        lift: '0 34px 80px -38px rgba(8, 47, 43, 0.55)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      animation: {
        'fade-up': 'fadeUp .9s cubic-bezier(.22,.61,.36,1) both',
        'fade-in': 'fadeIn 1.1s ease both',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'spin-slow': 'spin 26s linear infinite',
        marquee: 'marquee 38s linear infinite',
        'marquee-reverse': 'marqueeReverse 46s linear infinite',
        'pulse-ring': 'pulseRing 2.6s ease-out infinite',
        'draw-line': 'drawLine 2.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(.7)', opacity: '.8' },
          '80%, 100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
