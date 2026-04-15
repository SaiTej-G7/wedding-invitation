import { MapPin, Clock, CalendarDays, PartyPopper } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import floralDivider from "../assets/floral-divider.png";
import "../styles/details.css";

const details = [
  {
    icon: CalendarDays,
    title: "Wedding Date",
    lines: ["Saturday, May 9, 2026"],
  },
  {
    icon: Clock,
    title: "Ceremony Time",
    lines: ["Muhurtham at 10:00 AM"],
  },
  {
    icon: MapPin,
    title: "Venue",
    lines: [
      "12-22-34, Katheru Rd",
      "Krishna Nagar, Aryapuram",
      "Rajamahendravaram",
    ],
  },
  {
    icon: PartyPopper,
    title: "Reception",
    lines: ["May 11, 2026", "Vijayawada"],
  },
];

export default function Details() {
  return (
    <section id="details" className="section-cream">
      <div className="container text-center" style={{ maxWidth: "900px" }}>

      
        <ScrollReveal>
          <p className="details-subtitle">
            EVERYTHING YOU NEED TO KNOW
          </p>

          <h2 className="serif details-title">
            Wedding Details
          </h2>

          <img
            src={floralDivider}
            alt="floral"
            className="details-floral"
          />
        </ScrollReveal>

        {/* GRID */}
        <div className="row g-5 mt-0 mb-3">
          {details.map((d, i) => (
            <div className="col-12 col-md-6" key={d.title}>
              <ScrollReveal delay={i * 150}>
                <div className="details-card">

                  <div className="details-icon">
                    <d.icon size={24} />
                  </div>

                  <h4 className="serif mb-2">{d.title}</h4>

                  {d.lines.map((line) => (
                    <p key={line} className="details-text">
                      {line}
                    </p>
                  ))}

                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* MAP */}
        <ScrollReveal delay={400}>
          <div className="details-map">
            <iframe
              title="Wedding Location"
              src="https://www.google.com/maps?q=Rajamahendravaram&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}