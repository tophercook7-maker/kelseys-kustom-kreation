"use client";

import Link from "next/link";

const inputStyle = {
  width: "100%",
  marginTop: "0.5rem",
  padding: "0.75rem",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(0,0,0,0.4)",
  color: "#fff",
};

export default function HomePage() {
  return (
    <main className="container">
      {/* Hero Section - No bars, no overlays, background image is fully visible */}
      <section
        style={{
          paddingTop: "6rem",
          paddingBottom: "4rem",
          maxWidth: "720px"
        }}
      >
        {/* Background image carries the branding - completely open and visible */}
      </section>

      {/* Product Categories - Clean dropdowns, no surface bar */}
      <section style={{ marginTop: "4rem" }}>
        <details className="dropdown">
          <summary>Shirts</summary>
          <div>
            <p className="subtle" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Soft, durable, fully customizable.
            </p>
          </div>
        </details>

        <details className="dropdown">
          <summary>Tumblers</summary>
          <div>
            <p className="subtle" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Personalized drinkware that lasts.
            </p>
          </div>
        </details>

        <details className="dropdown">
          <summary>License Plates</summary>
          <div>
            <p className="subtle" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Bold designs that stand out.
            </p>
          </div>
        </details>

        <details className="dropdown">
          <summary>Contact & Custom Orders</summary>

          <div>
            <p>
              Have an idea for a custom order? Fill out the form below and we'll
              reach out to finalize details and arrange payment via email.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We'll be in touch by email shortly.");
              }}
              style={{
                display: "grid",
                gap: "1rem",
                marginTop: "1rem"
              }}
            >
              <label>
                Name
                <input required style={inputStyle} />
              </label>

              <label>
                Email
                <input type="email" required style={inputStyle} />
              </label>

              <label>
                Order Details
                <textarea rows={4} required style={inputStyle} />
              </label>

              <button className="button" type="submit">
                Send Request
              </button>
            </form>

            <hr style={{ margin: "2rem 0", opacity: 0.3 }} />

            <div style={{ lineHeight: "1.8" }}>
              <strong>Address:</strong><br />
              136 Red Cardinal Ln.<br />
              Lonsdale, AR 72087
              <br /><br />

              <strong>Phone:</strong><br />
              <a href="tel:15016173766">501-617-3766</a>
              <br /><br />

              <strong>Email:</strong><br />
              <a href="mailto:Kelseycook3123@gmail.com">
                Kelseycook3123@gmail.com
              </a>
            </div>
          </div>
        </details>
      </section>
    </main>
  );
}
