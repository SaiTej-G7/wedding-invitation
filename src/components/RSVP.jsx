import { useState } from "react";
import "../styles/rsvp.css";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attending: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 WhatsApp Number
    const whatsappNumber = "918686606011";

    const text = `
Wedding RSVP 💍

Name: ${formData.name}
Phone: ${formData.phone}
Attending: ${formData.attending}

Message: ${formData.message || "No message"}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // ✅ STEP 1: Show Thank You Message
    setSubmitted(true);

    // ✅ STEP 2: Delay WhatsApp Redirect (3 sec)
    setTimeout(() => {
      window.open(url, "_blank");
    }, 2000);
  };

  return (
    <section id="rsvp" className="section-light">
      <div className="container text-center" style={{ maxWidth: "600px" }}>

        {/* HEADER */}
        <p className="rsvp-subtitle">
          WE'D LOVE TO HAVE YOU
        </p>

        <h2 className="serif rsvp-title">
          RSVP
        </h2>

        {/* FORM */}
        {submitted ? (
          <p className="rsvp-thankyou">
            Thank you 💖, we are truly grateful and can’t wait to celebrate together 🥳🎊
          </p>
        ) : (
          <form className="rsvp-form" onSubmit={handleSubmit}>

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name *"
              className="rsvp-input"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Phone Number *"
              className="rsvp-input"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            {/* ATTENDING */}
            <div className="rsvp-radio-group">
              <p className="rsvp-label">WILL YOU ATTEND? *</p>

              <label>
                <input
                  type="radio"
                  name="attend"
                  value="Yes"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, attending: e.target.value })
                  }
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="attend"
                  value="No"
                  onChange={(e) =>
                    setFormData({ ...formData, attending: e.target.value })
                  }
                />
                No
              </label>
            </div>

            {/* MESSAGE */}
            <textarea
              placeholder="Send your wishes..."
              className="rsvp-textarea"
              rows="3"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            {/* BUTTON */}
            <button type="submit" className="rsvp-btn">
              SEND RSVP
            </button>

          </form>
        )}
      </div>
    </section>
  );
}