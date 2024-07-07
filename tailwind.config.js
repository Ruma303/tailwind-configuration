import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                '13': '3.25rem',
                '15': '3.75rem',
                '128': '32rem',
                '144': '36rem',
                '160': '40rem',
            },

            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'purple': '#3f3cbb',
                'midnight': '#121063',
                'tahiti': {
                    DEFAULT: '#67e8f9',
                    50: '#f5f7ff',
                    75: '#aeb9ff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                },
                warning: 'rgb(var(--color-warning) / <alpha-value>)',
                band: 'rgb(var(--color-band) / <alpha-value>)',
                'primary-color': '#ff11aa',
                'secondary-color': '#4f4f4f',
            },
            screen: {
                'portrait': { 'raw': '(min-height: 800px) and (orientation: portrait)' },
                'lg': '992px',
                'xl': '1280px',
                '2xl': '1440px',
                '3xl': '1920px',
            },
        },
        screens: {
            'xxs': '320px',
            'xs': '480px',
            ...defaultTheme.screens,
            'phone': { 'max': '767px' },
            'tablet': { 'min': '768px', 'max': '1023px' },
            'desktop': { 'min': '1024px', 'max': '1279px' },
        },
        /* colors: {
           transparent: 'transparent',
           current: 'currentColor',
           'white': '#ffffff',
           'purple': '#3f3cbb',
           'midnight': '#121063',
       }, */
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
}

