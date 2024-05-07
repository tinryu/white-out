import type { Config } from "tailwindcss";
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./public/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin"),
    iconsPlugin({
      collections: getIconCollections(["mdi", "lucide","bx", "tdesign"]),
    }),
  ],
};
export default config;
