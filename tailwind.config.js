/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'hero': "url('../../public/natal.jpg')",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
  },
    colors: {
      pallete: {
        link: '#027eb5', 
        blue: '#28488C',
        orange: '#F79633',
        white: '#FFFFFF',
        "medium-dark": '#545454',
        gray: '#E9E9E9',
        black: '#000000',
      },
    },
    plugins: [],
  },
}