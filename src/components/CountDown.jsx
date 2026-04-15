import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import floralDivider from "../assets/floral-divider.png";
import "../styles/countdown.css";

const WEDDING_DATE = new Date("2026-05-09T10:00:00").getTime();

export default function CountDown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.max(0, WEDDING_DATE - Date.now());

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section id="countdown" className="section-cream">
      <div className="container text-center">

        {/* HEADER (LIKE HERO STYLE) */}
        <ScrollReveal>
          <p className="countdown-subtitle">
            SAVE THE DATE
          </p>

          <h2 className="serif countdown-title">
            COUNT DOWN
          </h2>

          <img
            src={floralDivider}
            alt="floral-image"
            className="countdown-floral"
          />
        </ScrollReveal>

        {/* TIMER */}
        <ScrollReveal delay={200}>
          <div className="d-flex justify-content-center flex-wrap gap-4 gap-md-5 mt-4">
            {units.map((u) => (
              <div key={u.label} className="countdown-box">
                <h1 className="countdown-number">
                  {String(u.value).padStart(2, "0")}
                </h1>
                <p className="countdown-label">
                  {u.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* QUOTE */}
        <ScrollReveal delay={400}>
          <div className="countdown-quote">
            <p className="quote-text">
              "Together with joyous hearts, we invite you to witness and celebrate our love."
            </p>
            <p className="quote-author">
              — V & J
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}