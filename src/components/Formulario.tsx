import estilos from "./Formulario.module.css";
export default function Formulario() {
  return (
    <form action="" className={estilos.formulario}>
      <div className={estilos.campo}>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" id="nome" placeholder="Seu nome" />
      </div>

      <div className={estilos.campo}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="exemplo@exemplo.com"
        />
      </div>

      <div className={estilos.campo}>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          name="mensagem"
          id="mensagem"
          placeholder="Digite sua mensagem aqui..."
          rows={5}
        ></textarea>
      </div>

      <div className={estilos.campo}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
}
