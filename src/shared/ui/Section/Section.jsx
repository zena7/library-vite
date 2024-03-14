import clsx from "clsx";
import * as classes from "./Section.module.css";

export function Section({ className, children, ...props }) {
  return (
    <section
      {...props}
      className={clsx(classes.section, className && className)}>
      {children}
    </section>
  );
}
