// src/app/produtos/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos | PetShop",
  description: "Produtos disponíveis...",
};

export default function Produtos() {
  return (
    <section>
      <h2>Produtos</h2>
      <p>Texto qualquer da página Produtos....</p>
    </section>
  );
}
