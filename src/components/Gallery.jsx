import { useState , useEffect} from "react";
import ScrollReveal from "./ScrollReveal";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import "../styles/gallery.css";

const images = [
  { src: gallery1, alt: "Couple silhouette at sunset" },
  { src: gallery2, alt: "Holding hands close-up" },
  { src: gallery3, alt: "Wedding stage setting" },
  { src: gallery4, alt: "Couple in dancing moment" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  // 🔥 Handle back button
  useEffect(() => {
    const handlePopState = () => {
      setSelected(null);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const openImage = (index) => {
    setSelected(index);

    // 🔥 Add state to browser history
    window.history.pushState({ gallery: true }, "");
  };

  const closeImage = () => {
    setSelected(null);

    // 🔥 Go back instead of closing manually
    if (window.history.state?.gallery) {
      window.history.back();
    }
  };

  return (
    <>
      <section id="gallery" className="section-cream">
        <div className="container text-center">

          {/* HEADER (MATCH ALL SECTIONS) */}
          <ScrollReveal>
            <p className="gallery-subtitle">
              MOMENTS TOGETHER
            </p>

            <h2 className="serif gallery-title">
              Gallery
            </h2>
          </ScrollReveal>

          {/* GRID */}
          <div className="row g-3 g-md-4 mt-4 justify-content-center">

            {images.map((img, i) => (
              <div className="col-6 col-md-3" key={i}>
                <ScrollReveal delay={i * 100}>
                  <div
                    className="gallery-card"
                    onClick={() => openImage(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="gallery-img"
                    />
                  </div>
                </ScrollReveal>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {selected !== null && (
        <div
          className="gallery-lightbox"
          onClick={() => closeImage(null)}
        >
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="gallery-lightbox-img"
          />
        </div>
      )}
    </>
  );
}