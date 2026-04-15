import ScrollReveal from "./ScrollReveal";
import { Heart } from "lucide-react";
import "../styles/story.css";

const timeline = [
  {
    date: "January 2026",
    title: "A Glimpse of Destiny",
    text: "A single photograph sparked a connection, as our paths quietly began to intertwine.",
  },
  {
    date: "February 2026",
    title: "The First Meeting",
    text: "With hearts full of hope, we met in person, and our families joyfully brought us closer.",
  },
  {
    date: "March 30, 2026",
    title: "The Engagement",
    text: "Surrounded by love and blessings, we promised to walk this journey together forever.",
  },
  {
    date: "May 9, 2026",
    title: "The Wedding",
    text: "With love in our hearts, we begin a beautiful forever, together as one.",
  },
];

export default function Story() {
  return (
    <section id="story" className="section-light">
      <div className="container text-center" style={{ maxWidth: "900px" }}>

        {/* HEADER */}
        <ScrollReveal>
          <p className="story-subtitle">
            HOW IT ALL BEGAN
          </p>

          <h2 className="serif story-title">
            OUR STORY
          </h2>
        </ScrollReveal>

        {/* TIMELINE */}
        <div className="timeline-wrapper">

          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className={`timeline-row ${i % 2 !== 0 ? "reverse" : ""}`}>

                {/* LEFT / RIGHT CONTENT */}
                <div className="timeline-content">
                  <p className="timeline-date">{item.date}</p>
                  <h4 className="serif">{item.title}</h4>
                  <p className="timeline-text">{item.text}</p>
                </div>

                {/* CENTER ICON */}
                <div className="timeline-icon">
                  <Heart size={24} />
                </div>

              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
}