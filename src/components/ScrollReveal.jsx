import { useEffect, useRef } from "react";
import "../styles/animation.css";

export default function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, delay);
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className="reveal">{children}</div>;
}