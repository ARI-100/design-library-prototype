"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface ColorSpec {
  name: string;
  variable: string;
}

const colorSpecs: (ColorSpec & { slug: string })[] = [
  // Background
  { name: "Background Default", variable: "--sds-color-background-default-default", slug: "background-default" },
  { name: "Background Secondary", variable: "--sds-color-background-default-secondary", slug: "background-secondary" },
  { name: "Background Tertiary", variable: "--sds-color-background-default-tertiary", slug: "background-tertiary" },
  { name: "Background Brand", variable: "--sds-color-background-brand-default", slug: "background-brand" },
  { name: "Background Positive", variable: "--sds-color-background-positive-default", slug: "background-positive" },
  { name: "Background Warning", variable: "--sds-color-background-warning-default", slug: "background-warning" },
  { name: "Background Danger", variable: "--sds-color-background-danger-default", slug: "background-danger" },
  // Text
  { name: "Text Default", variable: "--sds-color-text-default-default", slug: "text-default" },
  { name: "Text Secondary", variable: "--sds-color-text-default-secondary", slug: "text-secondary" },
  { name: "Text Brand", variable: "--sds-color-text-brand-default", slug: "text-brand" },
  { name: "Text Positive", variable: "--sds-color-text-positive-default", slug: "text-positive" },
  { name: "Text Warning", variable: "--sds-color-text-warning-default", slug: "text-warning" },
  { name: "Text Danger", variable: "--sds-color-text-danger-default", slug: "text-danger" },
  // Border
  { name: "Border Default", variable: "--sds-color-border-default-default", slug: "border-default" },
  { name: "Border Brand", variable: "--sds-color-border-brand-default", slug: "border-brand" },
  { name: "Border Positive", variable: "--sds-color-border-positive-default", slug: "border-positive" },
  { name: "Border Warning", variable: "--sds-color-border-warning-default", slug: "border-warning" },
  { name: "Border Danger", variable: "--sds-color-border-danger-default", slug: "border-danger" },
];

export default function SemanticColorsPage() {
  return (
    <div>
      <h1>Semantic Colors</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Token</th>
            <th className={styles.th}>Sample</th>
            <th className={styles.th}>CSS Variable</th>
          </tr>
        </thead>
        <tbody>
          {colorSpecs.map((spec) => {
            const [val, setVal] = useState<string>("");
            useEffect(() => {
              const v = getComputedStyle(document.documentElement).getPropertyValue(spec.variable).trim();
              setVal(v);
            }, []);
            return (
              <tr key={spec.variable}>
                <td className={styles.td}>
                  <Link className={styles.link} href={`/docs/semantic-colors/${spec.slug}`}>{spec.name}</Link>
                </td>
                <td className={styles.td}>
                  <span className={styles.swatch} style={{ background: `var(${spec.variable})` }} />
                </td>
                <td className={styles.td} style={{fontFamily:"monospace"}}>{val}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
} 