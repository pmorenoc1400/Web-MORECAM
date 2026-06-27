import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Todos los campos son obligatorios." }, { status: 400 });
    }

    let transporter;
    let usingEthereal = false;

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      // Use Ethereal test account in development when no SMTP configured
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      usingEthereal = true;
    }

    const info = await transporter.sendMail({
      from: `"Morecam Contacto" <${process.env.SMTP_USER || "no-reply@morecam.com"}>`,
      to: "pablomorenoc96@gmail.com",
      subject: `Nueva solicitud de cotización de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nServicio: ${service}\nMensaje: ${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Correo:</strong> ${email}</p><p><strong>Servicio:</strong> ${service}</p><p><strong>Mensaje:</strong><br/>${message}</p>`,
    });

    const responsePayload: any = { ok: true, message: "Correo enviado correctamente." };

    if (usingEthereal) {
      // Include preview URL for Ethereal in development
      const preview = nodemailer.getTestMessageUrl(info);
      responsePayload.preview = preview;
    }

    return NextResponse.json(responsePayload);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al enviar correo." }, { status: 500 });
  }
}
