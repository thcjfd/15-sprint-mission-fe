import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: {
      100: "#3692FF",
    },
    secondary: {
      600: "#4B5563",
    },
    coolGray:{
      50: "#F9FAFB",
      200: "#E5E7EB"
    }
  },
});
