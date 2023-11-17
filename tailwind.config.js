/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      'sm': '0.875rem',  // Small
      'md': '1rem',     // Medium
      'lg': '1.25rem',  // Large
      'xl': '1.5rem', 
      'custom': '15px',
      'navText':'19px',
      'vsm':'12px',
    },
    colors: {
      'twitter-blue': '#1DA1F2',
      'handle':'#828282',
      'tweet':'#333333',
      'trend':'#F6F8FA',
      'search':'#E7ECF0',
    },
  },
  plugins: [],
}
