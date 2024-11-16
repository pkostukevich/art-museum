const theme = {
  colors: {
    grey: '#393939',
    lightGrey: '#F9F9F9',
    borderGrey: '#F0F1F1',

    orange: '#F17900',
    lightOrange: '#FBD7B2',
    transparentOrange: '#FBD2B24C',

    white: '#FFFFFF',
    ocher: '#E0A449',

    transparent: '#00000000',
  },

  fonts: {
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      xxxs: '12px',
      xxs: '15.35px',
      xs: '16px',
      s: '17.5px',
      m: '18px',
      l: '24px',
      xl: '32px',
      xxl: '64px',
    },
  },
  breakpoints: {
    large: '1320px',
    medium: '900px',
    small: '600px',
  },

  globalPadding: '20px',
};

export default theme;

export type Theme = typeof theme;
