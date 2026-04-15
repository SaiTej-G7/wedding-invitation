import heroImage from "../assets/hero-wedding.jpg";
import floral from "../assets/floral-divider.png";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-luxury">

      <img src={heroImage} className="hero-bg" alt="Ceremony-bgimage"/>
      <div className="hero-dark-overlay"></div>

      <div className="hero-center">

        <p className="hero-top-text">
          WE'RE GETTING MARRIED
        </p>

        <h1 className="hero-main">
          Vamsi Krishna  <span>&</span><br /> Jayasri
        </h1>

        <img src={floral} className="hero-floral" alt="foral-image"/>

        {/* ✅ UPDATED DATE FORMAT */}
        <p className="hero-date">
          May 9, 2026. Rajamahendravaram, India.
        </p>

        <a href="#rsvp" className="hero-btn">
          RSVP NOW
        </a>

      </div>
    </section>
  );
}