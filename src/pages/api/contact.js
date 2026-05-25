export const prerender = false; // IMPORTANTE: com 'n', diz para o Astro NÃO gerar essa página estática

export async function POST({ request }) {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const subject = data.get("subject"); // Pegando o assunto também
    const email = data.get("email");
    const message = data.get("message");

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Por favor, preencha os campos obrigatórios." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // No terminal da Vercel (Logs), você vai ver esse objeto estalando:
    console.log("Contato Recebido:", { name, subject, email, message });

    return new Response(
      JSON.stringify({ message: "Mensagem recebida com sucesso!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Erro interno ao processar o formulário." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}