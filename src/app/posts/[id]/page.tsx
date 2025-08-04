import Container from "@/components/Container";
import estilos from "./detalhe-post.module.css";

// src/app/posts/[id]/page.tsx
type DetalhePostProps = {
  params: Promise<{ id: string }>;
};

export default async function DetalhePost({ params }: DetalhePostProps) {
  const { id } = await params;
  console.log(id);

  /* DESAFIO! Faça um novo fetch na API usando este ID e mostre no HTML abaixo os dados obtidos! */

  return (
    <article className={estilos.conteudo}>
      <h2>Título...</h2>
      <Container>
        <h3>Categoria...</h3>
        <p>Descrição...</p>
      </Container>
    </article>
  );
}
