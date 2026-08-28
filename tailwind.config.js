/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep teal is the anchor brand color used across headings, the
        // header bar, buttons and section dividers on the live site.
        brand: {
          50: '#eef5f4',
          100: '#d3e6e3',
          200: '#a7cdc7',
          300: '#7bb3aa',
          400: '#4f9a8e',
          500: '#2f7d71', // primary brand teal
          600: '#24645b',
          700: '#1c4d46', // deep header/footer teal
          800: '#153a35',
          900: '#0e2825',
        },
        // Warm gold accent used for "Learn More" links and small highlights.
        accent: {
          400: '#d8ab5c',
          500: '#c9954a',
          600: '#b07e39',
        },
        ink: '#1f2a28',
        cloud: '#f6f8f7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        card: '10px',
      },
      boxShadow: {
        card: '0 10px 30px rgba(20, 40, 37, 0.10)',
        soft: '0 4px 14px rgba(20, 40, 37, 0.08)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};
