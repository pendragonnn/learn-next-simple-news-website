/*
  ini halamman utama yang ditampilkan ketika pertama kali
  mengakses aplikasi nextjs.

  halaman ini dibungkus oleh layout.tsx yang berada di folder yang sama (pada kasus awal ini adalah folder src/app)
*/

import PostList from "@/components/PostList";
import { getLastPost } from "@/lib/api";

export default async function Home() {
  // mengambil data post dari file api
  const posts = await getLastPost();

  return (
    <>
      <div className="main-heading">
        <h1>Selamat Datang di NextJS News</h1>
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
