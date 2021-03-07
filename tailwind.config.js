module.exports = {
  purge: ['./src/*.html'],
  theme: {
    colors: {
      black: {
        'x-light': '#292929',
        light: '#050505',
        DEFAULT: '#000',
      },
      blue: '#067DE5',
      white: '#fff',
    },
    boxShadow: {
      DEFAULT:
        '0 14px 28px rgba(55,255,155,0.19), 0 10px 10px rgba(55,255,155,0.23);',
      'dark-inset': 'inset 0px 18px 18px 0px rgba(0,0,0,0.32);',
    },
    fontFamily: {
      english: ['Helvetica Neue Regular', 'sans-serif'],
      persian: ['IRANSans', 'sans-serif'],
    },
    extend: {
      zIndex: {
        negative: '-1',
      },
    },
  },
};
