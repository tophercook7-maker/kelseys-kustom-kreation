export default function GalleryPage() {
  const galleryImages = [
    { src: "shirt.jpg", alt: "Custom Shirt" },
    { src: "tumbler.jpg", alt: "Custom Tumbler" },
    { src: "license-plate.jpg", alt: "Custom License Plate" },
  ];

  return (
    <main className="container surface">
      <h1 style={{ fontSize: "3rem", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
        Gallery
      </h1>
      <p className="subtle" style={{ fontSize: "1.125rem", maxWidth: "500px", lineHeight: "1.6", marginBottom: "3rem" }}>
        A selection of recent custom work.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem"
      }}>
        {galleryImages.map((img, index) => (
          <div
            key={index}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              aspectRatio: "1",
              background: "rgba(255, 255, 255, 0.03)"
            }}
          >
            <img
              src={`/images/${img.src}`}
              alt={img.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <a
          href="/#contact"
          className="button"
          style={{ padding: "0.9rem 1.5rem", display: "inline-block" }}
        >
          Request Something Like This
        </a>
      </div>
    </main>
  );
}
