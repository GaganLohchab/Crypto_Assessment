/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          borderRadius: {
              'custom': '1rem',
          },
          height: {
              'custom-btn': '3rem',
          },
      },
  },
  plugins: [
      require('daisyui'),
  ],
};
