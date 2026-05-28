import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const subject = data.get("subject");
    const email = data.get("email");
    const message = data.get("message");

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Por favor, preencha os campos obrigatórios." }),
        { status: 400 }
      );
    }

    // DISPARO DO E-MAIL
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: 'eryckyrayner@gmail.com',
      subject: `💼 Contato Portfólio: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">Novo contato do Portfólio</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail de quem mandou:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-left: 4px solid #FCA100;">
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Mensagem enviada com sucesso!" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Erro ao tentar enviar o e-mail." }),
      { status: 500 }
    );
  }
}