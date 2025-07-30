import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | PetShop",
  description: "Missão, visão e valores...",
};

export default function Sobre() {
  return (
    <section>
      <h2>Sobre</h2>
      <p>Texto qualquer da página Sobre....</p>
    </section>
  );
}
