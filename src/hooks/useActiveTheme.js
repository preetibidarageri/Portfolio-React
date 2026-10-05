import { useEffect, useState } from "react";

// Returns the theme index of the section currently crossing the middle of the viewport.
export default function useActiveTheme() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const els = document.querySelectorAll("[data-theme]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActive(Number(e.target.dataset.theme)),
        ),
      { rootMargin: "-50% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}
