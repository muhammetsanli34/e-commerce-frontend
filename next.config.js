/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "@/app/variables.scss";`,

  },
};

module.exports = nextConfig;
