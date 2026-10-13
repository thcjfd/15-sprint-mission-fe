import { style } from "@vanilla-extract/css";

export const emptyBox = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
});

export const emptyText = style({
  fontSize: "24px",
  fontWeight: "600",
});

export const articlesList = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});
