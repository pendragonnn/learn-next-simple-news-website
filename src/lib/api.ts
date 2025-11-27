// mengambil referensi tipe data typescript dari file post
import { Post } from "@/types/post";

/*
  fungsi getLastPost() async yang bertugas untuk mengambil 5 posting terbaru dari API eksternal 

  Promise<Post[]> untuk memberi typescript bahwa fungsi ini akan mengembalikan Promise yang berisi array dari post

  berbentuk Promise karena setiap async selalu mengembalikan Promise walaupun ditulis return posts saja
  -> async = bungkus hasilnya pakai promise
  -> post[] = bentuk datanya array of Post
*/

export async function getLastPost(): Promise<Post[]> {
  // fungsi fetch mengambil data dari API eksternal, await berarti menunggu sampai fetch selesai
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  // konversi Response ke JSON juga bersifat asynchronous jadi membutuhkan await
  const posts = await response.json();
  return posts
}

export async function getDetailPost(id: number): Promise<Post> {
  // fungsi fetch mengambil data dari API eksternal, await berarti menunggu sampai fetch selesai
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  // konversi Response ke JSON juga bersifat asynchronous jadi membutuhkan await
  const post = await response.json();
  return post
}