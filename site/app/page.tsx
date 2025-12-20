import Link from "next/link";

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

      {/* Product Categories - Content panel with surface, below hero */}
      <section className="surface" style={{ marginTop: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
          <div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Shirts</h3>
            <p className="subtle" style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "300px" }}>
              Soft, durable, fully customizable.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Tumblers</h3>
            <p className="subtle" style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "300px" }}>
              Personalized drinkware that lasts.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>License Plates</h3>
            <p className="subtle" style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "300px" }}>
              Bold designs that stand out.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
