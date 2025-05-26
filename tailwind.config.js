/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)', ...fontFamily.sans],
                geist: ['var(--font-geist-sans)', ...fontFamily.sans],
                mono: ['var(--font-geist-mono)', ...fontFamily.mono],
            },
        },
    },
    plugins: [],
}; 