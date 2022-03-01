const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.tsx"],
  theme: {
    colors: {
      white: "#FFFFFF",
      navy: {
        100: "#F2F5F7",
        200: "#E1E3E8",
        300: "#C1C7D0",
        400: "#909AAA",
        500: "#5E6D84",
        600: "#2D415E",
        700: "#081F42",
      },
      orange: {
        200: "#FFF8D7",
        300: "#FFDF42",
        400: "#FFAD00",
        500: "#FF7C00",
      },
      blue: {
        200: "#CAE4FF",
        400: "#3A7AFF",
        500: "#1366E9",
      },
      green: {
        200: "#DFF6DE",
        500: "#26AA53",
      },
      red: {
        200: "#FBE2E2",
        300: "#FEA6A6",
        400: "#D70000",
        500: "#AD0000",
      },
      magenta: {
        200: "#FDDAFF",
        500: "#880490",
      },
      yellow: {
        500: "#FFBB00",
      },
    },
    boxShadow: {
      base: "0px 1px 4px rgba(0, 0, 29, 0.1)",
      low: "0px 3px 14px rgba(0, 0, 29, 0.12)",
      middle: "0px 8px 30px rgba(0, 0, 29, 0.17)",
      high: "0px 16px 80px 2px rgba(0, 0, 29, 0.22)",
    },
    // spacing: {
    //   0: 0,
    //   1: "1px",
    //   2: "2px",
    //   4: "4px",
    //   6: "6px",
    //   8: "8px",
    //   12: "12px",
    //   16: "16px",
    //   24: "24px",
    //   32: "32px",
    //   40: "40px",
    //   48: "48px",
    //   64: "64px",
    // },
    borderRadius: {
      0: 0,
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      half: "50%",
    },
    extend: {},
  },
  plugins: [
    // Typography
    plugin(function ({ addComponents }) {
      addComponents({
        ".text-heading-1": {
          fontSize: "24px",
          lineHeight: "30px",
          fontWeight: 600,
        },
        ".text-heading-2": {
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: 600,
        },
        ".text-heading-3": {
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: 600,
        },
        ".text-heading-4": {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: 600,
        },
        ".text-heading-5": {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: 700,
          letterSpacing: "1px",
          textTransform: "uppercase",
        },
        ".text-heading-6": {
          fontSize: "10px",
          lineHeight: "16px",
          fontWeight: 700,
          letterSpacing: "1px",
          textTransform: "uppercase",
        },
        ".text-body-1": {
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: 400,
        },
        ".text-body-2": {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: 400,
        },
        ".text-body-3": {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: 400,
        },
        ".text-caption-1": {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: 600,
          letterSpacing: "0.025rem",
        },
        ".text-caption-2": {
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: 600,
          letterSpacing: "0.025rem",
        },
      });
    }),
  ],
};
