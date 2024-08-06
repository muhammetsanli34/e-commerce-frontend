/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/src/style/variables.scss"; @import "@/src/style/mixins.scss";`,

  },
  images: {
    domains: ["klbtheme.com"],
  },
};

module.exports = nextConfig;
