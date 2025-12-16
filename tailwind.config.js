/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // South African flag colors with modern variations
        'sa-gold': '#FFB612',
        'sa-green': '#007749',
        'sa-red': '#DE3831',
        'sa-blue': '#002395',
        'sa-black': '#000000',
        'sa-white': '#FFFFFF',
        // Additional South African inspired colors
        'protea-pink': '#E91E63',
        'springbok-gold': '#F4B942',
        'jacaranda': '#8E44AD',
        'ubuntu-orange': '#FF6B35',
        'rooibos': '#B8860B',
        'baobab': '#8B4513',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'sa-gradient': 'linear-gradient(135deg, #002395 0%, #007749 50%, #FFB612 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #FF6B35 0%, #F4B942 50%, #DE3831 100%)',
        'african-pattern': "url('/african-pattern.svg')",
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}