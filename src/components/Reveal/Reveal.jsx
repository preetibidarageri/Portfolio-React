import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Ensure the element exists before observing
    if (!ref.current) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      {
        // Lowering threshold ensures it triggers even on smaller viewports
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px", // Triggers slightly before it enters the viewport
      },
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.r} ${shown ? styles.in : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
