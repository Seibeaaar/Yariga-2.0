/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(2.5)",
          },
        },
      },
      animation: {
        heartbeat: "heartbeat 3s linear infinite",
      },
      colors: {
        primary: "#475BE8",
        "primary-light": "#11142D",
        "primary-dark": "#EFEFEF",
        "secondary-light": "#808191",
        "secondary-dark": "#6F767E",
        black: "#1A1D1F",
        white: "#FCFCFC",
        "bg-light": "#F4F4F4",
        "bg-dark": "#111315",
        warning: "#FD8539",
        success: "#2ED480",
        secondary: "#CFC8FF",
        danger: "#F45252",
        "border-dark": "#272B30",
        "border-light": "#E4E4E4",
      },
    },
  },
  plugins: [],
};
