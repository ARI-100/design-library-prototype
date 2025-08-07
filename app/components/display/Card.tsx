import React from "react";
import styles from "./Card.module.css";

export type CardVariant = "default" | "stroked";
export type CardLayout = "horizontal" | "vertical";
export type CardMediaType = "icon" | "image" | "none";

type CardProps = {
  /** Visual variant of the card */
  variant?: CardVariant;
  /** Layout direction */
  layout?: CardLayout;
  /** Type of media to display */
  mediaType?: CardMediaType;
  /** Icon element (for mediaType="icon") */
  icon?: React.ReactNode;
  /** Image source (for mediaType="image") */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Action buttons or elements */
  actions?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler for the entire card */
  onClick?: () => void;
  /** Card content (children) */
  children?: React.ReactNode;
};

function classNames(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(" ");
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  layout = "horizontal",
  mediaType = "none",
  icon,
  imageSrc,
  imageAlt = "",
  title,
  description,
  actions,
  className,
  onClick,
  children,
}) => {
  const cardClasses = classNames(
    styles.card,
    variant === "default" && styles.variantDefault,
    variant === "stroked" && styles.variantStroked,
    layout === "horizontal" && styles.layoutHorizontal,
    layout === "vertical" && styles.layoutVertical,
    className
  );

  const renderMedia = () => {
    if (mediaType === "none") return null;

    if (mediaType === "icon") {
      return (
        <div className={styles.media}>
          <div className={styles.mediaIcon}>{icon}</div>
        </div>
      );
    }

    if (mediaType === "image") {
      return (
        <div className={styles.media}>
          <div className={styles.mediaImage}>
            {imageSrc && <img src={imageSrc} alt={imageAlt} />}
          </div>
        </div>
      );
    }

    return null;
  };

           return (
           <div className={cardClasses} onClick={onClick}>
             {renderMedia()}
             
             <div className={styles.content}>
               <div className={styles.textContent}>
                 <h3 className={styles.title}>{title}</h3>
                 {description && <p className={styles.description}>{description}</p>}
               </div>
               
               {children && <div className={styles.children}>{children}</div>}
               
               {actions && <div className={styles.actions}>{actions}</div>}
             </div>
           </div>
         );
}; 