module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        change: "black",
      },
    },
  },
  variants: {},
  plugins: [],
};
