module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255,255,255,0.08)",
        primary: {
          50: "#f3f8ff",
          100: "#e1efff",
          500: "#6ea8ff",
          700: "#4a7dff"
        },
        accent: "#7c5cff"
      },
      backdropBlur: {
        sm: "4px",
        md: "8px",
        lg: "12px"
      }
    }
  },
  plugins: []
};
