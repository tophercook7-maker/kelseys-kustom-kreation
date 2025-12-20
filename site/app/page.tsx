import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container surface">
      <h1 style={{ fontSize: "4rem", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: "1.1", marginBottom: "1.25rem", maxWidth: "700px" }}>
        Made for you,<br />
        not for everyone.
      </h1>
      <p style={{ fontSize: "1.25rem", color: "var(--muted)", marginBottom: "2.5rem", maxWidth: "550px", lineHeight: "1.5" }}>
        Custom shirts, tumblers, and license plates crafted with intention.
      </p>
      <Link href="/shop" className="button">
        Shop
      </Link>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", marginTop: "4rem" }}>
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
    </main>
  );
}
