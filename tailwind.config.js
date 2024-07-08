import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    //darkMode: 'class',
    //darkMode: ['variant', '&:not(.light *)'],
    /* darkMode: ['variant', [
        '@media (prefers-color-scheme: dark) { &:not(.light *) }',
        '&:is(.dark *)',
    ]], */
    //darkMode: ['selector', '[data-theme="dark"]'],
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
        plugin(function ({ addBase, theme, addComponents }) {
            addBase({
                'h1': { fontSize: theme('fontSize.2xl') },
                'h2': { fontSize: theme('fontSize.xl') },
                'h3': { fontSize: theme('fontSize.lg') },
            }),
            addComponents({
                '.btn': {
                    backgroundColor: '#3f3cbb',
                    color: '#fff',
                    padding: '.5rem 1rem',
                    borderRadius: '.25rem',
                    fontWeight: '600',
                    width: 'fit-content',
                    padding: '.5rem 1rem',
                    borderRadius: '.5rem',
                },
                '.btn-blue': {
                    backgroundColor: '#3490dc',
                    width: 'fit-content',
                    padding: '.5rem 1rem',
                    borderRadius: '.5rem',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#2779bd'
                    },
                },
                '.btn-red': {
                    backgroundColor: '#e3342f',
                    width: 'fit-content',
                    padding: '.5rem 1rem',
                    borderRadius: '.5rem',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#cc1f1a'
                    },
                },
            })
        }),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
    presets: [
        require('./mypreset.js'),
    ]
}

