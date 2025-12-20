import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      {/* Hero Section - No surface, floats directly on background */}
      <section
        style={{
          paddingTop: "6rem",
          paddingBottom: "6rem",
          maxWidth: "700px"
        }}
      >
        <h1 className="hero-title">
          Kelsey's Kustom Kreations
        </h1>

        <p className="hero-subtitle">
          Colorful • Creative • Custom-made
        </p>
      </section>

      {/* Product Categories - Content panel with surface */}
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
