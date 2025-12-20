import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: string;
  image?: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div style={{
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "12px",
      padding: "2rem",
      transition: "border-color 0.2s ease"
    }}>
      {image && (
        <img
          src={`/images/${image}`}
          alt={name}
          style={{
            width: "100%",
            aspectRatio: "1",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1.5rem"
          }}
        />
      )}
      
      <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        {name}
      </h3>
      <p className="subtle" style={{ fontSize: "1rem", marginBottom: "1.75rem", lineHeight: "1.5" }}>
        Starting at {price}
      </p>
      <Link href="/contact" className="button" style={{ display: "inline-block" }}>
        Request Customization
      </Link>
    </div>
  );
}
