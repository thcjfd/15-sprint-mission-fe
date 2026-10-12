import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
    background: vars.color.coolGray[50],
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    borderRadius: "8px",
})

export const thumbnail = style({
    display: "block",
    border: `1px solid ${vars.color.coolGray[200]}`,
    padding: "12px",
    borderRadius: "6px",
    width: "72px",
    height: "72px",
})

export const titleGroup = style({
    display: "flex",
    alignItems: "center",
    gap: "8px",
})