"use client";
import { useState } from "react";
import estilos from "./Formulario.module.css";
import { enviarContato } from "@/lib/enviar-contato";
import { useFormStatus } from "react-dom";

function BotaoEnviar() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Processando..." : "Enviar"}
    </button>
  );
}

export default function Formulario() {
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("");

  async function processarDados(dadosForm: FormData) {
    setMensagem("");
    setTipoMensagem("");

    try {
      await enviarContato(dadosForm);
      setMensagem("Mensagem enviada com sucesso");
      setTipoMensagem("sucesso");

      dadosForm.set("nome", "");
      dadosForm.set("email", "");
      dadosForm.set("mensagem", "");
    } catch (error: unknown) {
      setMensagem(error instanceof Error ? error.message : "Erro ao enviar");
      console.error("Erro:", error);
    }
  }

  return (
    <form action={processarDados} className={estilos.formulario}>
      <div className={estilos.campo}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          required
          id="nome"
          placeholder="Seu nome"
        />
      </div>

      <div className={estilos.campo}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          id="email"
          placeholder="exemplo@exemplo.com"
        />
      </div>

      <div className={estilos.campo}>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          name="mensagem"
          required
          id="mensagem"
          placeholder="Digite sua mensagem aqui..."
          rows={5}
        ></textarea>
      </div>

      <div className={estilos.campo}>
        <BotaoEnviar />
      </div>

      {mensagem && (
        <p
          className={`${estilos.mensagem} ${estilos[tipoMensagem]}`}
          aria-live="polite"
        >
          {mensagem}
        </p>
      )}
    </form>
  );
}
