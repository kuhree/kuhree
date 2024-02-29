import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: ({ colors }) => ({
        // Theme
        primary: colors.purple,
        secondary: colors.fuchsia,
        tertiary: colors.violet,

        // Defaults
        gray: colors.stone,

        // Statuses
        success: colors.green,
        error: colors.red,
        warning: colors.amber,
        info: colors.blue
      }),

      fontFamily: () => ({
        sans: 'sans-serif',
        serif: 'serif',
        mono: 'monospace',
        title: '"Press Start 2P", monospace',
        cursive: 'Damion, cursive'
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries')
  ]
}
