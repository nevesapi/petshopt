// src/app/contato/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | PetShop",
  description: "Fale conosco...",
};

export default function Contato() {
  return (
    <section>
      <h2>Contato</h2>
      <p>Texto qualquer da página Contato....</p>
    </section>
  );
}
