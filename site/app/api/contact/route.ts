import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const name = (data?.name || "").toString().trim();
    const email = (data?.email || "").toString().trim();
    const details = (data?.details || "").toString().trim();

    if (!name || !email || !details) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.ORDERS_TO_EMAIL || "Kelseycook3123@gmail.com";
    const fromEmail = process.env.FROM_EMAIL || toEmail;
    const brand = process.env.BRAND_NAME || "Kelsey's Kustom Kreations";

    // 1) Email the business
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Custom Order Request — ${name}`,
      text: [
        `Brand: ${brand}`,
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Order Details:",
        details,
        "",
        "NOTE: If the customer selected a reference image on the site, they were instructed to attach it to a reply email.",
      ].join("\n"),
    });

    // 2) Auto-reply to customer
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: `We got your request — ${brand}`,
      text: [
        `Hi ${name},`,
        "",
        `Thanks for reaching out to ${brand}!`,
        "We received your custom order request and will reply soon to confirm details and arrange payment.",
        "",
        "If you have reference images, reply to this email and attach them.",
        "",
        "— Kelsey's Kustom Kreations",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
