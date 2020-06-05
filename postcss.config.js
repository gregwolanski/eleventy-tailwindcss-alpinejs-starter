module.exports = {
  plugins: [
    require(`tailwindcss`)(`./styles/tailwind.config.js`),
    require(`autoprefixer`),
    ...(process.env.ELEVENTY_PRODUCTION
      ? [
          require(`postcss-clean`),
          require(`@fullhuman/postcss-purgecss`)({
            content: ["_site/**/*.html"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: [],
            whitelistPatterns: [/body/, /headroom/, /ril/],
          }),
        ]
      : []),
  ],
};
