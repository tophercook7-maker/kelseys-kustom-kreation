"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="global-nav">
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/#contact">Contact</Link>
    </nav>
  );
}
