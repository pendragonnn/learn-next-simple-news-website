import Link from "next/link";
// mengambil referensi tipe data typescript dari file post
import { Post } from "@/types/post";

/*
  PostListProps adalah kontrak atau aturan bentuk data untuk komponen ini
  - komponen ini harus menerima props bernama posts
  - dan posts harus berupa array of Post (Post[])
  - kalau yang diterima salah, TS bakal ngasih error
*/
interface PostListProps {
  posts: Post[];
}

/*
  ini adalah server component (karena pakai async dan tidak ada "use client" declaration)
  
  { posts }: PostListProps mengambil properti posts dari props dan props harus sesuai tipe PostListProps

  Next otomatis menjalankan komponen ini di server
*/

async function PostList( { posts } : PostListProps ) {
  return (
    /*
      return ui biasa dannnn
      return ui dengan fungsi map (fungsi ini me-return komponen makanya pake () instead of {})
      {post.map((post) => (...))}
      - mengambil setiap item post dari array post.
      - .map() akan merender satu elemen <div> untuk setiap post
    */
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <h2>
            <Link href="/">{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default PostList;
