'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const navItems = [
  { name: "Typography", href: "/docs/typography" },
  { name: "Colors", href: "/docs/colors" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navLink} ${
              pathname === item.href ? styles.active : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
} 