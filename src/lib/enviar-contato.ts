"use server";

import { supabase } from "./supabase";

export async function enviarContato(dadosFormulario: FormData) {
  const nome = dadosFormulario.get("nome")?.toString().trim();
  const email = dadosFormulario.get("email")?.toString().trim();
  const mensagem = dadosFormulario.get("mensagem")?.toString().trim();

  if (!email || !nome || !mensagem) {
    throw new Error("Por favor, preencha todos os campos!");
  }

  const { error } = await supabase
    .from("contatos")
    .insert({ nome, email, mensagem });

  if (error) {
    throw new Error("Falha ao enviar mensagem. Tente novamente");
  }
}
