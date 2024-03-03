import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/homepage/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],


};
module.exports = {
  theme: {
    extend: {
      width: {
        'square': '200px', // Velikost čtverce
      },
      height: {
        'square': '200px', // Velikost čtverce
      },
      backgroundImage: {
        'swastika': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' fill=\'none\'%3E%3Cg id=\'swastika\'%3E%3Cpath id=\'s1\' fill=\'%23000000\' d=\'M43 99H0v58h43v-58z\'/%3E%3Cpath id=\'s2\' fill=\'%23000000\' d=\'M0 157h43v43C19.258 200 0 180.742 0 157z\'/%3E%3C/g%3E%3C/svg%3E")',
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;
