module.exports = {
  purge: ["./src/*.html"],
  theme: {
    colors: {
      black: {
        light: "#050505",
        DEFAULT: "#000",
      },
      blue: "#067DE5",
      white: "#fff",
    },
    boxShadow: {
      DEFAULT:
        "0 14px 28px rgba(255,255,255,0.19), 0 10px 10px rgba(255,255,255,0.23);",
    },
    fontFamily: {
      english: ["Helvetica Neue Regular", "sans-serif"],
      persian: ["IRANSans", "sans-serif"],
    },
    extend: {
      zIndex: {
        negative: "-1",
      },
    },
  },
};
