"use client";

import { Button } from "@/app/components/inputs/Button";
import styles from "./page.module.css";

interface RowSpec {
  variant: "primary" | "neutral" | "subtle";
  size: "medium" | "small";
  label: string;
}

const rows: RowSpec[] = [
  { variant: "primary", size: "medium", label: "Primary" },
  { variant: "primary", size: "small", label: "Primary Small" },
  { variant: "neutral", size: "medium", label: "Neutral" },
  { variant: "neutral", size: "small", label: "Neutral Small" },
  { variant: "subtle", size: "medium", label: "Subtle" },
  { variant: "subtle", size: "small", label: "Subtle Small" },
  { variant: "primary", size: "medium", label: "Disabled", },
];

export default function ButtonsPage() {
  return (
    <div>
      <h1 className={styles.heading}>Buttons</h1>
      <p>Buttons are interactive elements that allow users to perform actions. They come in different variants and sizes to suit various use cases.</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Variant</th>
            <th className={styles.th}>Size</th>
            <th className={styles.th}>Sample</th>
            <th className={styles.th}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const isDisabled = row.label === "Disabled";
            const code = `<Button variant=\"${row.variant}\"${row.size !== "medium" ? ` size=\"${row.size}\"` : ""}${isDisabled ? " disabled" : ""}>${row.label}</Button>`;
            return (
              <tr key={idx}>
                <td className={styles.td}>{row.variant}</td>
                <td className={styles.td}>{row.size}</td>
                <td className={styles.td}>
                  <Button variant={row.variant} size={row.size} disabled={isDisabled}>
                    {row.label}
                  </Button>
                </td>
                <td className={styles.td}>
                  <code className={styles.code}>{code}</code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
} 