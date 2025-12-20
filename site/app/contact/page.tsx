"use client";

import { useState } from "react";

const inputStyle = {
  width: "100%",
  marginTop: "0.5rem",
  padding: "0.75rem",
  borderRadius: "8px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  background: "rgba(255, 255, 255, 0.03)",
  color: "var(--fg)",
  fontSize: "1rem",
  fontFamily: "inherit",
  transition: "border-color 0.2s ease"
};

const labelStyle = {
  display: "block",
  fontSize: "0.9375rem",
  fontWeight: 500,
  marginBottom: "0.5rem",
  color: "var(--fg)"
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main style={{ padding: "6rem 2rem", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
          Contact
        </h1>
        <p className="subtle" style={{ fontSize: "1.125rem", maxWidth: "500px", lineHeight: "1.6" }}>
          Tell us what you'd like created.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.75rem" }}>
          <div>
            <label htmlFor="name" style={labelStyle}>
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="description" style={labelStyle}>
              What would you like made?
            </label>
            <textarea
              id="description"
              name="description"
              rows={6}
              required
              style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
            />
          </div>

          <button className="button" type="submit" style={{ justifySelf: "start", marginTop: "0.5rem" }}>
            Send Request
          </button>
        </form>
      ) : (
        <div style={{ padding: "2rem 0" }}>
          <p className="subtle" style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>
            Thank you! We'll be in touch shortly.
          </p>
        </div>
      )}
    </main>
  );
}
