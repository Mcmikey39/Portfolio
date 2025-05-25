import { Resend } from "resend";

export async function POST(request: Request) {
  const { Surename, email, message } = await request.json();
  const resend = new Resend(process.env.RESEND || "");
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: process.env.EMAILTO || "",
      replyTo: email,
      subject: "Hello!",
      html: `<p>Surename: ${Surename}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    });
    return new Response(JSON.stringify({ status: "OK" }), { status: 200 });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ status: "error", error: error.message }),
      { status: 500 },
    );
  }
}
