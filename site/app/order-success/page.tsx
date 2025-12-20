export default function OrderSuccess() {
  return (
    <main className="container">
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "4rem 2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Thank you!</h1>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Your custom order request has been sent.
          We'll review it and contact you shortly to
          confirm details and payment.
        </p>
      </div>
    </main>
  );
}
