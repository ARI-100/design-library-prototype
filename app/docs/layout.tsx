'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import styles from "./layout.module.css";

const navItems = [
  { name: "Showcase", href: "/docs/showcase" },
  { name: "Typography", href: "/docs/typography" },
  { name: "Colors", href: "/docs/colors" },
  { name: "Semantic Colors", href: "/docs/semantic-colors" },
  { name: "Buttons", href: "/docs/buttons" },
  { name: "Inputs", href: "/docs/inputs" },
  { name: "Cards", href: "/docs/cards" },
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
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Design System</h2>
          <ThemeToggle />
        </div>
        <nav className={styles.nav}>
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
        </nav>
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
} 