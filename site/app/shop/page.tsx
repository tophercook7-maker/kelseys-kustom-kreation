import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  return (
    <main className="container surface">
      <h1 style={{ fontSize: "3rem", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
        Shop
      </h1>
      <p className="subtle" style={{ fontSize: "1.125rem", maxWidth: "500px", lineHeight: "1.6", marginBottom: "3rem" }}>
        Browse our collection of custom products.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        <ProductCard name="Custom Shirt" price="$25" image="shirt.jpg" />
        <ProductCard name="Custom Tumbler" price="$30" image="tumbler.jpg" />
        <ProductCard name="Custom License Plate" price="$20" image="license-plate.jpg" />
      </div>
    </main>
  );
}
