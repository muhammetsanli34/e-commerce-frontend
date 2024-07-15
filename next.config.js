/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/src/app/variables.scss";`,

  },
  images: {
    domains: ["klbtheme.com"],
  }
};

module.exports = nextConfig;
