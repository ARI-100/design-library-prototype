import styles from "./page.module.css";

interface TypeSpec {
  name: string;
  size: string;
  weight: string;
  lineHeight: string;
  letterSpacing?: string;
}

const typeSpecs: TypeSpec[] = [
  {
    name: "Title Hero",
    size: "72px",
    weight: "700",
    lineHeight: "1.2",
    letterSpacing: "-3%",
  },
  {
    name: "Title Page",
    size: "48px",
    weight: "700",
    lineHeight: "1.2",
    letterSpacing: "-2%",
  },
  {
    name: "Subtitle",
    size: "32px",
    weight: "400",
    lineHeight: "1.2",
  },
  {
    name: "Heading",
    size: "24px",
    weight: "600",
    lineHeight: "1.2",
    letterSpacing: "-2%",
  },
  {
    name: "Subheading",
    size: "20px",
    weight: "400",
    lineHeight: "1.2",
  },
  {
    name: "Body Base",
    size: "16px",
    weight: "400",
    lineHeight: "1.4",
  },
  {
    name: "Body Small",
    size: "14px",
    weight: "400",
    lineHeight: "1.4",
  },
  {
    name: "Body Small Strong",
    size: "14px",
    weight: "600",
    lineHeight: "1.4",
  },
  {
    name: "Input",
    size: "16px",
    weight: "400",
    lineHeight: "1",
  },
  {
    name: "Body Code",
    size: "16px",
    weight: "400",
    lineHeight: "1",
  },
];

export default function TypographyPage() {
  return (
    <div>
      <h1>Typography</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Style</th>
            <th className={styles.th}>Sample</th>
            <th className={styles.th}>Size</th>
            <th className={styles.th}>Weight</th>
            <th className={styles.th}>Line Height</th>
            <th className={styles.th}>Letter Spacing</th>
          </tr>
        </thead>
        <tbody>
          {typeSpecs.map((spec) => (
            <tr key={spec.name}>
              <td className={styles.td}>{spec.name}</td>
              <td className={styles.td}>
                <span
                  className={styles.sample}
                  style={{
                    fontSize: spec.size,
                    fontWeight: Number(spec.weight),
                    lineHeight: spec.lineHeight,
                    letterSpacing: spec.letterSpacing,
                  }}
                >
                  The quick brown fox
                </span>
              </td>
              <td className={styles.td}>{spec.size}</td>
              <td className={styles.td}>{spec.weight}</td>
              <td className={styles.td}>{spec.lineHeight}</td>
              <td className={styles.td}>{spec.letterSpacing ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 