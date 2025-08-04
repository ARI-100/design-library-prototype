import styles from "./page.module.css";

interface ColorSpec {
  name: string;
  variable: string;
}

const categories: { title: string; colors: ColorSpec[] }[] = [
  {
    title: "Slate",
    colors: Array.from({ length: 10 }, (_, i) => {
      const step = (i + 1) * 100;
      return {
        name: `Slate ${step}`,
        variable: `--color-slate-${step}`,
      };
    }),
  },
  {
    title: "Brand",
    colors: Array.from({ length: 10 }, (_, i) => {
      const step = (i + 1) * 100;
      return {
        name: `Brand ${step}`,
        variable: `--color-brand-${step}`,
      };
    }),
  },
  {
    title: "Red",
    colors: Array.from({ length: 10 }, (_, i) => {
      const step = (i + 1) * 100;
      return {
        name: `Red ${step}`,
        variable: `--color-red-${step}`,
      };
    }),
  },
  {
    title: "Yellow",
    colors: Array.from({ length: 10 }, (_, i) => {
      const step = (i + 1) * 100;
      return {
        name: `Yellow ${step}`,
        variable: `--color-yellow-${step}`,
      };
    }),
  },
  {
    title: "Green",
    colors: Array.from({ length: 10 }, (_, i) => {
      const step = (i + 1) * 100;
      return {
        name: `Green ${step}`,
        variable: `--color-green-${step}`,
      };
    }),
  },
  {
    title: "Gray",
    colors: Array.from({ length: 10 }, (_, i) => {
      const step = (i + 1) * 100;
      return {
        name: `Gray ${step}`,
        variable: `--color-gray-${step}`,
      };
    }),
  },
  {
    title: "Pink",
    colors: Array.from({ length: 10 }, (_, i) => {
      const step = (i + 1) * 100;
      return {
        name: `Pink ${step}`,
        variable: `--color-pink-${step}`,
      };
    }),
  },
];

export default function ColorsPage() {
  return (
    <div>
      <h1>Color Primitives</h1>
      {categories.map((cat) => (
        <section key={cat.title}>
          <h2>{cat.title}</h2>
          <div className={styles.grid}>
            {cat.colors.map((c) => {
              const value = getComputedStyle(document.documentElement).getPropertyValue(c.variable);
              return (
                <div key={c.variable}>
                  <div
                    className={styles.swatch}
                    style={{ background: `var(${c.variable})` }}
                  />
                  <div className={styles.label}>{c.name}<br />{value.trim()}</div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
} 