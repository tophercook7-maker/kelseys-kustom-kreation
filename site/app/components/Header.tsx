import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "2.5rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.03em" }}>
            Kelsey's <span style={{ color: "var(--accent)", fontWeight: 400 }}>Kustom</span> Kreations
          </div>
          <div className="desktop-nav">
            <Link href="/shop">Shop</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
