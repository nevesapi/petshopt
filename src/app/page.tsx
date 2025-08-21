// src/app/page.tsx
import ListaPosts from "@/components/ListaPosts";
import estilos from "./page.module.css";
import { Post } from "@/types/Post";
import SemPosts from "@/components/SemPosts";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase.from("posts").select("*");
  console.log(data);

  if (error) {
    throw new Error("Erro ao buscar posts. " + error.message);
  }
  
  const posts: Post[] = data;

  return (
    <section className={estilos.conteudo}>
      <h2>Pet Notícias</h2>

      {/* Renderização condicional */}
      {posts.length === 0 ? <SemPosts /> : <ListaPosts posts={posts} />}
    </section>
  );
}
