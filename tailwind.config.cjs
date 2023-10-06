module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        '1': "url('/galaxy.webp')",
        '2': "url('/iphones.webp')",
        '3': "url('/s23.webp')",
        '4': "url('/iphone.webp')",
        '5': "url('/ultra.webp')",
        '6': "url('/samsung.webp')",
      },
      boxShadow: {
        box: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        hover: '0px 6px 6px 0px rgba(0, 0, 0, 0.35)'
      },
      fontFamily: {
        nunito: "Nunito"
      },
      colors: {
        sale: '#AE5353',
      }
    },
  },
  plugins: [],
};
