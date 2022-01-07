// module.exports = {
//   // mode: 'jit',
//   purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     //   screens: {
//     //   'mobile': '375px',
//     //    // => @media (min-width: 375px) { ... }
//     //   'tablet': '640px',
//     //   // => @media (min-width: 640px) { ... }

//     //   'laptop': '1024px',
//     //   // => @media (min-width: 1024px) { ... }

//     //   'desktop': '1280px',
//     //   // => @media (min-width: 1280px) { ... }
//     // },
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };


   
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

};