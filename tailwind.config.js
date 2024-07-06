/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            'xxs': '320px',
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
        },
        colors: {
            transparent: 'transparent',
        },
        extend: {},

    },
    variants: [],
    presets: [],
    plugins: [],
    darkMode: false,
}

