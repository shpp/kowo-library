import { createSystem, defaultConfig } from '@chakra-ui/react';

export const kowoTheme = createSystem(defaultConfig, {
    globalCss: {
        html: {
            colorPalette: 'kowo',
        },
    },
    theme: {
        tokens: {
            fonts: {
                heading: { value: 'var(--font-podkova)' },
                text: { value: 'var(--font-podkova)' },
                body: { value: 'var(--font-inter)' },
            },
            colors: {
                kowo: {
                    50: { value: '#f0f7e9' },
                    100: { value: '#d5e8c7' },
                    200: { value: '#b9d9a5' },
                    300: { value: '#9dca83' },
                    400: { value: '#81bb61' },
                    500: { value: '#66A52B' },
                    600: { value: '#528422' },
                    700: { value: '#3d6319' },
                    800: { value: '#284210' },
                    900: { value: '#132107' },
                    950: { value: '#0a1803' },
                },
            },
        },
        semanticTokens: {
            colors: {
                kowo: {
                    solid: { value: '{colors.kowo.500}' },
                    contrast: { value: '{colors.kowo.100}' },
                    fg: { value: '{colors.kowo.700}' },
                    muted: { value: '{colors.kowo.100}' },
                    subtle: { value: '{colors.kowo.200}' },
                    emphasized: { value: '{colors.kowo.300}' },
                    focusRing: { value: '{colors.kowo.500}' },
                },
            },
        },
        breakpoints: {
            base: '0px',
            sm: '576px', 
            md: '768px', 
            lg: '1024px', 
            xl: '1280px',
            xxl: '1440px',
        },
    },
});
