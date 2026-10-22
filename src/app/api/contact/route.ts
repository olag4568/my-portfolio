import { NextResponse } from "next/server";

const recipient = "quadriazeez745@gmail.com";
const allowedProjects = new Set([
  "Business website",
  "Web application",
  "E-commerce website",
  "Bug fixing or improvements",
  "Other project",
]);

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "The contact service is not configured yet. Please contact me by email or WhatsApp." },
        { status: 503 },
      );
    }

    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const project = typeof body.project === "string" ? body.project.trim() : "";
    const budget = typeof body.budget === "string" ? body.budget.trim() : "";
    const details = typeof body.details === "string" ? body.details.trim() : "";

    if (!name || name.length > 100 || !email || email.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        !allowedProjects.has(project) || !details || details.length > 5000 ||
        budget.length > 100) {
      return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email,
        subject: `Portfolio enquiry: ${project}`,
        text: [
          "New message from your portfolio contact form",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Project type: ${project}`,
          `Budget: ${budget || "Not specified"}`,
          "",
          "Project details:",
          details,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please try again later or contact me by WhatsApp." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later or contact me by WhatsApp." },
      { status: 500 },
    );
  }
}
