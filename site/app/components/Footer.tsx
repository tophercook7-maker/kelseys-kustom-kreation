export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem",
        textAlign: "center",
        fontSize: "0.9rem",
        opacity: 0.8
      }}
    >
      © {new Date().getFullYear()} Kelsey's Kustom Kreations
    </footer>
  );
}
