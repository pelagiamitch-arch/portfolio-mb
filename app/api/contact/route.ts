import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Tous les champs sont obligatoires.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["mitchboulessi731@gmail.com"],
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nouveau message depuis votre portfolio</h2>

          <p>
            <strong>Nom :</strong> ${name}
          </p>

          <p>
            <strong>Email :</strong> ${email}
          </p>

          <hr />

          <p>
            <strong>Message :</strong>
          </p>

          <p>
            ${message}
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Une erreur est survenue lors de l'envoi.",
      },
      {
        status: 500,
      }
    );
  }
}