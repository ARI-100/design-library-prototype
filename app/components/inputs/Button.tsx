import React from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "neutral" | "subtle";
export type ButtonSize = "medium" | "small";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Padding / typography scale */
  size?: ButtonSize;
};

function classNames(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(" ");
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "medium",
      disabled,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const classes = classNames(
      styles.btn,
      styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}` as const],
      styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}` as const],
      disabled && styles.disabled,
      className
    );

    return (
      <button ref={ref} className={classes} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; 