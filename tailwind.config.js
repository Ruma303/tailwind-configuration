    import defaultTheme from 'tailwindcss/defaultTheme';

    /** @type {import('tailwindcss').Config} */
    export default {
        content: [
            "./index.html",
            "./src/**/*.{html,js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {
                screen: {
                    'portrait': {'raw': '(min-height: 800px) and (orientation: portrait)'},
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
                'phone' : {'max': '767px'},
                'tablet': {'min': '768px', 'max': '1023px'},
                'desktop': {'min': '1024px', 'max': '1279px'},
            },
            extend: {
                screen: {
                    'lg': '992px',
                    'xl': '1280px',
                    '2xl': '1440px',
                    '3xl': '1920px',
                },
            },
            /* colors: {
                transparent: 'transparent',
                black: '#000',
                white: '#fff',
                gray: {
                    50: '#f9fafb',
                    100: '#f7fafc',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#2d3748',
                    900: '#1a202c',
                },
                slate: {
                    50: '#f9fafb',
                    100: '#f4f5f7',
                    200: '#e5e7eb',
                    300: '#d2d6dc',
                    400: '#9fa6b2',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#252f3f',
                    900: '#161e2e',
                },

            } */
        },
    }

