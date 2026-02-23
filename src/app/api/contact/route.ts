import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Business Volunteers <onboarding@resend.dev>",
      to: ["contact.businessvolunteers@gmail.com"],
      subject: `New Inquiry: ${service || "General"} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #e85d3a;">New Contact Form Inquiry</h2>
          <hr style="border: 1px solid #e2e8f0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f8fafc; padding: 16px; border-radius: 8px;">${message}</p>
          <hr style="border: 1px solid #e2e8f0;" />
          <p style="color: #94a3b8; font-size: 12px;">Sent from businessvolunteers.online contact form</p>
        </div>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
