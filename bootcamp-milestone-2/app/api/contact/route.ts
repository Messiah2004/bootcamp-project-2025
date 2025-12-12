import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { ok: false, message: "Invalid form data" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress = process.env.CONTACT_TO ?? "messitube38@gmail.com";

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: toAddress,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json(
      { ok: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in contact API:", err);
    return NextResponse.json(
      { ok: false, message: "Server error sending message" },
      { status: 500 }
    );
  }
}
