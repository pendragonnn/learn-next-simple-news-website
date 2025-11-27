/*
  ini halamman utama yang ditampilkan ketika pertama kali
  mengakses aplikasi nextjs.

  halaman ini dibungkus oleh layout.tsx yang berada di folder yang sama (pada kasus awal ini adalah folder src/app)
*/

import PostList from "@/components/PostList";
import { getAllPost } from "@/lib/api";

export default async function page() {
  // mengambil data post dari file api
  const posts = await getAllPost();

  return (
    <>
      <div className="main-heading">
        <h1>Daftar Tulisan</h1>
        <p className="subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nemo
          officia vero labore quas, recusandae cum optio expedita reprehenderit
          assumenda.
        </p>
      </div>
      {/* mengirim data post sebagai props ke komponen PostList */}
      <PostList posts={posts}/>
    </>
  );
}
