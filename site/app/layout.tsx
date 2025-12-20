import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export const metadata = {
  title: "Kelsey's Kustom Kreations | Custom Shirts, Tumblers & More",
  description:
    "Kelsey's Kustom Kreations creates colorful, custom shirts, tumblers, license plates, and personalized items. Handmade designs made just for you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Header />
        <Nav />

        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
