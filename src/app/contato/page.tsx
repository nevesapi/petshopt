// src/app/contato/page.tsx
import estilos from "./contato.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: "Fale conosco...",
};

export default function Contato() {
  return (
    <section className={estilos.conteudo}>
      <h2>Contato</h2>
      <p>Texto qualquer da página Contato....</p>
    </section>
  );
}
