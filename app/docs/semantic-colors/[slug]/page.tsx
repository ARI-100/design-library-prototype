import styles from "./page.module.css";
import { notFound } from "next/navigation";

interface ColorSpec {
  name: string;
  variable: string;
  slug: string;
}

// Keep in sync with list page
const colorSpecs: ColorSpec[] = [
  { name: "Background Default", variable: "--sds-color-background-default-default", slug: "background-default" },
  { name: "Background Secondary", variable: "--sds-color-background-default-secondary", slug: "background-secondary" },
  { name: "Background Tertiary", variable: "--sds-color-background-default-tertiary", slug: "background-tertiary" },
  { name: "Background Brand", variable: "--sds-color-background-brand-default", slug: "background-brand" },
  { name: "Background Positive", variable: "--sds-color-background-positive-default", slug: "background-positive" },
  { name: "Background Warning", variable: "--sds-color-background-warning-default", slug: "background-warning" },
  { name: "Background Danger", variable: "--sds-color-background-danger-default", slug: "background-danger" },
  { name: "Text Default", variable: "--sds-color-text-default-default", slug: "text-default" },
  { name: "Text Secondary", variable: "--sds-color-text-default-secondary", slug: "text-secondary" },
  { name: "Text Brand", variable: "--sds-color-text-brand-default", slug: "text-brand" },
  { name: "Text Positive", variable: "--sds-color-text-positive-default", slug: "text-positive" },
  { name: "Text Warning", variable: "--sds-color-text-warning-default", slug: "text-warning" },
  { name: "Text Danger", variable: "--sds-color-text-danger-default", slug: "text-danger" },
  { name: "Border Default", variable: "--sds-color-border-default-default", slug: "border-default" },
  { name: "Border Brand", variable: "--sds-color-border-brand-default", slug: "border-brand" },
  { name: "Border Positive", variable: "--sds-color-border-positive-default", slug: "border-positive" },
  { name: "Border Warning", variable: "--sds-color-border-warning-default", slug: "border-warning" },
  { name: "Border Danger", variable: "--sds-color-border-danger-default", slug: "border-danger" },
];

function cssVarToHex(value: string) {
  if (!value) return "";
  // value is rgb(r g b / a) or rgb(r, g, b)
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return value;
  ctx.fillStyle = value;
  return ctx.fillStyle; // canvas normalizes to hex
}

export default function SemanticColorDetail({ params }: { params: { slug: string } }) {
  const spec = colorSpecs.find((c) => c.slug === params.slug);
  if (!spec) notFound();

  // Raw value will be resolved client-side via CSS var; we show variable name only here.

  return (
    <div className={styles.container}>
      <h1>{spec.name}</h1>
      <div className={styles.swatch} style={{ background: `var(${spec.variable})` }} />
      <dl>
        <dt>CSS Variable</dt>
        <dd>{spec.variable}</dd>
      </dl>
    </div>
  );
} 