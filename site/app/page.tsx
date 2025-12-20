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
      </section>
    </main>
  );
}
