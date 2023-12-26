import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('../../public/home.svg')",
      },
      colors: {
        golden: "#ddc991",
        secondary: "#3D3E4B",
        darkBlue: "#0d1639e3",
        textColor: "#BEBEBE",
      },
    },
  },
  plugins: [],
}
export default config
