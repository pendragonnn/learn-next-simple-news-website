/*
  ini halamman utama yang ditampilkan ketika pertama kali
  mengakses aplikasi nextjs.

  halaman ini dibungkus oleh layout.tsx yang berada di folder yang sama (pada kasus awal ini adalah folder src/app)
*/

import Image from "next/image";

export default function Home() {
  return (
    <div className="main-heading">
      <h1>Selamat Datang di NextJS News</h1>
      <p className="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nemo officia vero labore quas, recusandae cum optio expedita reprehenderit assumenda.</p>


    </div>
  );
}
