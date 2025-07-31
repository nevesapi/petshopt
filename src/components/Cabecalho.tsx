// src/components/Cabecalho.tsx
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header>
      <h1>
        <Link href="/">PetShop</Link>
      </h1>
      <nav>
        <Link href="/">Blog</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
}
