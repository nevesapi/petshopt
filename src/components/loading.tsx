import Container from "./Container";
import estilos from "./loading.module.css";

export default function Loading() {
  return (
    <section className={estilos.conteudo}>
      <h2>Carregando...</h2>
      <Container>
        <div className={estilos.imagemLoading}>
          <img src="/images/loadging.svg" alt="Pacman" />
        </div>
      </Container>
    </section>
  );
}
