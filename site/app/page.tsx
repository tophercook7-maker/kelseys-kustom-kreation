"use client";

import { useState } from "react";
import Link from "next/link";

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "0.5rem",
  padding: "0.75rem",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(0,0,0,0.35)",
  color: "#fff",
};

function ContactDropdown() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <details className="dropdown">
      <summary>Contact & Custom Orders</summary>
      <div className="dropbody">
        <p>
          Tell us what you want made. We'll reply by email to confirm details and arrange payment.
        </p>

        <form
          name="custom-orders"
          method="POST"
          action="/order-success"
          data-netlify="true"
          encType="multipart/form-data"
          style={{
            display: "grid",
            gap: "1.1rem",
            marginTop: "1rem"
          }}
        >
          <input type="hidden" name="form-name" value="custom-orders" />

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
              name="reference"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setImagePreview(URL.createObjectURL(file));
              }}
              style={{ marginTop: "0.5rem", color: "#fff" }}
            />
            <small style={{ opacity: 0.85 }}>
              Images are sent automatically with your order.
            </small>
          </label>

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Reference preview"
              style={{
                maxWidth: "100%",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            />
          )}

          <button className="button" type="submit">
            Send Custom Order
          </button>
        </form>

        <div style={{ marginTop: "1.25rem", opacity: 0.9 }}>
          <p style={{ marginBottom: "0.5rem" }}><strong>Photo tips:</strong></p>
          <ul style={{ marginTop: 0 }}>
            <li>Bright, clear photos work best</li>
            <li>Screenshots are fine</li>
            <li>You can send multiple images by replying to our email</li>
          </ul>
        </div>

        <hr style={{ margin: "1.5rem 0", opacity: 0.3 }} />

        <div style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
          <strong>Kelsey's Kustom Kreations</strong><br /><br />

          <strong>Address:</strong><br />
          136 Red Cardinal Ln.<br />
          Lonsdale, AR 72087<br /><br />

          <strong>Phone:</strong><br />
          <a href="tel:15016173766">501-617-3766</a><br /><br />

          <strong>Email:</strong><br />
          <a href="mailto:Kelseycook3123@gmail.com">
            Kelseycook3123@gmail.com
          </a>
        </div>
      </div>
    </details>
  );
}

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
          <div className="dropbody">
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
          <div className="dropbody">
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
          <div className="dropbody">
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

        <ContactDropdown />
      </section>
    </main>
  );
}
