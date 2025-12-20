import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          padding: "8rem 2rem",
          borderRadius: "32px",
          backgroundImage: "url(/images/hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          maxWidth: "1200px",
          margin: "0 auto 4rem"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)"
          }}
        />

        <div style={{ position: "relative", maxWidth: "700px" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: "1.1", marginBottom: "1.25rem", color: "var(--fg)" }}>
            Made for you,<br />
            not for everyone.
          </h1>
          <p style={{ fontSize: "1.25rem", color: "var(--fg)", marginBottom: "2.5rem", maxWidth: "550px", lineHeight: "1.5", opacity: 0.9 }}>
            Custom shirts, tumblers, and license plates crafted with intention.
          </p>
          <Link href="/shop" className="button">
            Shop
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section style={{ padding: "4rem 2rem 6rem", maxWidth: "1200px", margin: "0 auto" }}>
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
