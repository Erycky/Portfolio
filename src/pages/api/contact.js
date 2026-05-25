export const prereder = false; // Garante que essa rota rode no servidor da Vercel

export async function POST({ request }) {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    // Validação simples dos campos
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Por favor, preencha todos os campos." }),
        { status: 400 }
      );
    }

    // AQUI: A Vercel recebe os dados. 
    // No futuro, se quiser disparar um e-mail para você via Resend ou salvar num banco:
    console.log("Novo contato recebido:", { name, email, message });

    return new Response(
      JSON.stringify({ message: "Mensagem enviada com sucesso!" }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Erro interno no servidor." }),
      { status: 500 }
    );
  }
}