import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily:{
      'seasons': ["the-seasons", "sans-serif"],
      'dm-sans': ["DM Sans", "sans-serif"],
      "cormorant-garamond": ["Cormorant Garamond", "serif"],
      "cmu-serif": ["CMU Serif", "serif"],
      
    },
    extend: {
      colors: {
        "light-beige": "#fffaf4",
        "warm-gray":"#948e84",
      },
    },
  },
  plugins: [],
} satisfies Config

