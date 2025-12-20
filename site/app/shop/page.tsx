import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  return (
    <main style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
          Shop
        </h1>
        <p className="subtle" style={{ fontSize: "1.125rem", maxWidth: "500px", lineHeight: "1.6" }}>
          Browse our collection of custom products.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        <ProductCard name="Custom Shirt" price="$25" image="shirt.jpg" />
        <ProductCard name="Custom Tumbler" price="$30" image="tumbler.jpg" />
        <ProductCard name="Custom License Plate" price="$20" image="license-plate.jpg" />
      </div>
    </main>
  );
}
