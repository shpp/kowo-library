import { createSystem, defaultConfig, defineConfig, defineRecipe } from '@chakra-ui/react';

const buttonRecipe = defineRecipe({
  base: {
    display: 'flex',
    padding: '8px 16px',
    gap: '8px',
    width: 'fit-content',
    rounded: '8px',
    border: 'none',
    fontFamily: 'Inter',
    lineHeight: '150%',
    transition: 'background-color 0.2s'
  },
  variants: {
    visual: {
      kowo_green: { fontSize: '16px', fontWeight: 600, bgColor: 'rgba(102, 165, 43, 1)', color: 'white', _hover: { bgColor: 'rgba(102, 155, 53, 1)' } },
      kowo_white: { fontSize: '16px', fontWeight: 600, bgColor: 'white', color: 'rgba(102, 165, 43, 1)', border: '1px solid rgba(212, 213, 217, 1)', _hover: { bgColor: 'rgba(242, 248, 233, 1)' } },
      kowo_red: { fontSize: '16px', fontWeight: 600, bg: 'rgba(252, 65, 65, 1)', color: 'white', _hover: { bgColor: 'rgba(231, 23, 23, 1)' }},
    },
    size: {
      sm: { padding: '6px', fontSize: '14px', rounded: '6px'  }
    }
  },
});

const customConfig = defineConfig({
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
          solid: { value: '{colors.kowo.500}' }, // #66A52B
          contrast: { value: '{colors.kowo.100}' }, // #d5e8c7
          fg: { value: '{colors.kowo.700}' }, // #3d6319
          muted: { value: '{colors.kowo.100}' }, // #d5e8c7
          subtle: { value: '{colors.kowo.200}' }, // #b9d9a5
          emphasized: { value: '{colors.kowo.300}' }, // #9dca83
          focusRing: { value: '{colors.kowo.500}' }, // #66A52B
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
    recipes: {
      button: buttonRecipe,
    },
  },
});

export const kowoTheme = createSystem(defaultConfig, customConfig);
export default createSystem(defaultConfig, customConfig); // added for chakra types generating CLI
