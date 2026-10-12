import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  maxWidth: "1200px",
  margin: "24px auto 0",
});

export const title = style({
  fontWeight: "700",
  fontSize: "20px",
  color: vars.color.coolGray[900],
  textAlign: "left",
});
