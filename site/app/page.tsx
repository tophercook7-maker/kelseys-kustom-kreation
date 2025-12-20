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
            <p style={{ marginBottom: "1rem" }}>
              We create custom shirts and apparel that are soft, durable, and fully customizable to match your unique style.
            </p>
            <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
              <li>Custom designs and graphics</li>
              <li>Personalized text and names</li>
              <li>Various sizes and styles</li>
              <li>High-quality materials</li>
            </ul>
          </div>
        </details>

        <details className="dropdown">
          <summary>Tumblers</summary>
          <div>
            <p style={{ marginBottom: "1rem" }}>
              Personalized drinkware that lasts. Our custom tumblers are perfect for keeping your drinks at the perfect temperature while showcasing your unique style.
            </p>
            <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
              <li>Custom designs and graphics</li>
              <li>Personalized text and names</li>
              <li>Durable construction</li>
              <li>Perfect for gifts or personal use</li>
            </ul>
          </div>
        </details>

        <details className="dropdown">
          <summary>License Plates</summary>
          <div>
            <p style={{ marginBottom: "1rem" }}>
              Bold designs that stand out. Custom license plates with your unique message, design, or branding.
            </p>
            <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
              <li>Custom text and graphics</li>
              <li>Various colors and finishes</li>
              <li>Durable materials</li>
              <li>Perfect for vehicles or display</li>
            </ul>
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

                const name = e.target.name.value;
                const email = e.target.email.value;
                const details = e.target.details.value;

                const subject = encodeURIComponent("New Custom Order Request");
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nOrder Details:\n${details}\n\nIf you selected a reference image, please attach it to this email before sending.`
                );

                window.location.href = `mailto:Kelseycook3123@gmail.com?subject=${subject}&body=${body}`;
              }}
              style={{
                display: "grid",
                gap: "1rem",
                marginTop: "1rem"
              }}
            >
              <label>
                Name
                <input name="name" required style={inputStyle} />
              </label>

              <label>
                Email
                <input name="email" type="email" required style={inputStyle} />
              </label>

              <label>
                Order Details
                <textarea
                  name="details"
                  rows={4}
                  required
                  style={inputStyle}
                />
              </label>

              <label>
                Upload Reference Image (optional)
                <input
                  type="file"
                  accept="image/*"
                  style={{
                    marginTop: "0.5rem",
                    color: "#fff"
                  }}
                />
                <small style={{ opacity: 0.8, display: "block", marginTop: "0.5rem", fontSize: "0.875rem" }}>
                  After submitting, your email app will open — please attach the image before sending.
                </small>
              </label>

              <button className="button" type="submit">
                Send Custom Order Request
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
