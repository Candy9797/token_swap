/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    prefix: 'tw-',
    theme: {
        colors: {
            primary: '#1EEFA4',
            secondary: '#FFFFFF',
            quarternary: '#808F93',
            quarternary2: '#8A9B9E',
            primaryBg: '#0B1012',
            primaryDark: '#0C0D17',
            warning: '#ED7E17',
            alert: '#FF5A5A',
            disable: '#4B595E',
            white: '#ffffff',
            black: '#000000',
            dark: '#07222F',
            darkButton: '#134757',
            button01: '#1C282C',
            unselected: 'rgba(31, 42, 46, 0.6)',
            line02: 'rgba(41, 62, 72, 0.45)',
            blue: {
                100: '#2980E8',
                200: '#45A6FF',
            },
            bg: {
                line2: 'rgba(41, 62, 72, 0.45)',
                line3: 'rgba(31, 42, 46, 0.6)',
            },
            bodyBg: '#000000',
            boxBg: '#141E21',
            bnb: '#F0B90B',
            eth: '#5284FF',
            arb: '#4EB5FF',
            divider: 'rgba(41, 62, 72, 0.45)',
            'divider-bright': 'rgba(52, 75, 87, 0.65)',
            gradient: {
                1: '#0085FF',
                2: '#1EEFA4',
                banner1: 'rgba(11, 16, 18, 0)',
                banner2: 'rgba(13, 194, 141, 0.1)',
                'banner-eth': 'rgba(82, 132, 255, 0.1)',
                referralFrom: 'rgba(245, 245, 245, 1)',
                referralTo: 'rgba(198, 198, 198, 1)',
            },
            overlay: 'rgba(0, 0, 0, 0.5)',
            tooltip: '#344B57',
            infoBoxBg: 'rgba(39, 54, 57, 0.45)',
            'white/2': 'rgba(255, 255, 255, 0.02)',
            headerBg: '#152021',
        },
        screens: {
            xs: '320px',
            sm: '429px',
            md: '768px',
            '2md': '960px',
            lg: '1024px',
            base: '1200px',
            xl: '1280px',
            '1.5xl': '1380px',
            '2xl': '1440px',
            '3xl': '1600px',
            '4xl': '1780px',
            '5xl': '1920px',
        },
        fontSize: {
            xxs: ['10px', '14px'],
            xs: ['12px', '20px'],
            sm: ['14px', '22px'],
            base: ['16px', '24px'],
            lg: ['18px', '26px'],
            xl: ['20px', '28px'],
            '1.5xl': ['22px', '32px'],
            '2xl': ['24px', '34px'],
            '3xl': ['28px', '40px'],
            '4xl': ['32px', '46px'],
            '5xl': ['36px', '52px'],
            '6xl': ['40px', '56px'],
            '7xl': ['44px', '60px'],
            '8xl': ['48px', '64px'],
            '9xl': ['52px', '68px'],
            '10xl': ['56px', '72px'],
        },
        fontFamily: {
            sans: [
                'var(--font-plus-jakarta-sans)',
                '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Apple Color Emoji',
                'var(--font-noto-color-emoji)',
            ],
        },
        extend: {
            borderRadius: {
                none: '0',
                xs: '0.125rem',
                sm: '0.25rem',
                md: '0.375rem',
                DEFAULT: '0.5rem',
                lg: '0.75rem',
                xl: '1rem',
                '2xl': '1.25rem',
                '3xl': '1.5rem',
                '4xl': '1.75rem', //28px
            },
            boxShadow: {
                ball: '0 0 0 3px white, 0 0 0 4px #5284ff',
                dropdown: '-4px 18px 70px 0 rgba(108, 143, 167, 0.32)',
                popup: '0px 3px 9px rgba(0, 0, 0, 0.12)',
                menu: '0px 4px 16px rgba(0, 0, 0, 0.36)',
                collectionItem: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                airdrop2: '0px 4px 16px rgba(0, 0, 0, 0.45)',
            },
            fontFamily: {
                // plusJakartaSans: ['PlusJakartaSans'],
                // sans: ['var(--font-plus-jakarta-sans)', '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Apple Color Emoji', 'var(--font-noto-color-emoji)'],
            },
            gridTemplateColumns: {
                profile: '360px 1fr',
            },
            transitionProperty: {
                width: 'width',
                height: 'height',
            },
            backgroundImage: {
                banner: "url('/assets/img/bg-banner.svg')",
                'grant-program-banner': "url('/assets/img/grant-program-bg.png')",
                linear1:
                    'linear-gradient(88.97deg, rgba(38, 171, 213, 0.6) 0%, rgba(0, 97, 187, 0.6) 100%)',
                linear2: 'linear-gradient(180deg, rgba(20, 30, 33, 0.00) 0%, #141E21 100%)',
                linear3: 'linear-gradient(153deg, rgba(28, 40, 44, 0.00) 0%, #1C282C 100%)',
                linear4: 'linear-gradient(165deg, #1C282C 10.3%, rgba(28, 40, 44, 0.00) 100%)',
                linear5: 'linear-gradient(180deg, rgba(31, 42, 46, 0.60) 0%, rgba(31, 42, 46, 0.00) 100%)',
                referralDialogTldBg:
                    'linear-gradient(90deg, rgba(20, 30, 33, 0.90) 0%, rgba(20, 30, 33, 0.70) 50.75%, rgba(20, 30, 33, 0.40) 100%)',
            },
            height: {
                navbar: '4rem',
            },
            width: {
                filter: '252px',
            },
            colors: {
                opacity: {
                    2: 'rgba(255, 255, 255, 0.02)',
                    50: 'rgba(255, 255, 255, 0.05)',
                },
            },
            animation: {
                flashPriceBg: 'flashPriceBg 2s ease-in-out 1',
                toastShowUp: 'toastShowUp 100s ease-in-out 1',
                'zoom-in-95': 'zoom-in-95 0.2s ease-out 1',
                'zoom-in-110': 'zoom-in-110 3s ease-out forwards',
                'fade-in': 'fade-in 0.2s ease-out 1',
                showUp: 'showUp 0.2s ease-out 1',
            },
            flexBasis: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
            },
            flex: {
                2: '2 2 0%',
            },
            spacing: {
                // 自定义外边距
                '12': '3rem',
                '14': '3.5rem',
                // 自定义内边距
                '16': '4rem',
                '20': '5rem'
            }
        },
    },
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/app/globals.css"
      ],
}
