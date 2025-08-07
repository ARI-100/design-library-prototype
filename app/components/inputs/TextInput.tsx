import React from "react";
import styles from "./TextInput.module.css";

export type TextInputState = "default" | "error" | "disabled";
export type TextInputSize = "medium" | "small";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** Label text displayed above the input */
  label?: string;
  /** State of the input field */
  state?: TextInputState;
  /** Size of the input field */
  inputSize?: TextInputSize;
  /** Error message to display when state is "error" */
  errorMessage?: string;
  /** Helper text to display below the input */
  helperText?: string;
};

function classNames(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(" ");
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      state = "default",
      inputSize = "medium",
      errorMessage,
      helperText,
      className,
      disabled,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || state === "disabled";
    const hasError = state === "error";

    const containerClasses = classNames(
      styles.container,
      styles[`size${inputSize.charAt(0).toUpperCase() + inputSize.slice(1)}` as const],
      state === "error" && styles.stateError,
      isDisabled && styles.stateDisabled,
      className
    );

    return (
      <div className={containerClasses}>
        {label && (
          <label className={styles.label} htmlFor={rest.id}>
            {label}
          </label>
        )}
        
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            className={styles.input}
            disabled={isDisabled}
            aria-invalid={hasError}
            aria-describedby={
              hasError && errorMessage
                ? `${rest.id}-error`
                : helperText
                ? `${rest.id}-helper`
                : undefined
            }
            {...rest}
          />
        </div>

        {hasError && errorMessage && (
          <div className={styles.errorMessage} id={`${rest.id}-error`}>
            {errorMessage}
          </div>
        )}

        {!hasError && helperText && (
          <div className={styles.helperText} id={`${rest.id}-helper`}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput"; 