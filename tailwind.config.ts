import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          bg: {
            dark: "#050507",
            light: "#fbfbfd",
          },
          surface: {
            dark: "#0f0f13",
            "dark-subtle": "#15151b",
            light: "#ffffff",
            "light-subtle": "#f5f5f7",
          },
          border: {
            dark: "rgba(255, 255, 255, 0.08)",
            "dark-hover": "rgba(255, 255, 255, 0.16)",
            light: "rgba(0, 0, 0, 0.08)",
            "light-hover": "rgba(0, 0, 0, 0.16)",
          },
          text: {
            primary: {
              dark: "#f5f5f7",
              light: "#1d1d1f",
            },
            secondary: {
              dark: "#86868b",
              light: "#6e6e73",
            },
            tertiary: {
              dark: "#515154",
              light: "#a1a1a6",
            },
          },
          blue: {
            DEFAULT: "#2997ff",
            hover: "#147ce5",
            light: "#0071e3",
          },
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          "Inter",
          '"Segoe UI"',
          "Roboto",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          '"JetBrains Mono"',
          "ui-monospace",
          "Menlo",
          "monospace",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
