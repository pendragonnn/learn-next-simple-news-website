/*
  komponen Link adalah komponen bawaan Next.js yang dipakai untuk membuat navigasi antar halaman tanpa reluad penuh (client-side navigation). 
  komponen ini:
  - hanya mengganti konten halaman
  - tidak memuat ulang CSS/JS seluruhnya
  - tidak menghapus state global (misalnya context)
  - mengambil data halaman terlebih dahulu, bahkan sebelum user klik
  - langsung bekerja dengan sistem routing Next.js 
*/

/*
  komponen Image adalah komponen bawaan Next.js yang menggantikan <img> biasa, tujuannya untuk:
  - optimasi otomatis
  - loading lebih cepat
  - responsiveness yang lebih pintar
  - SEO yang lebih bagus
  - menghemat bandwith
  
  komponen ini dibuat karena <img> biasa itu boros dan tidak otomatis optimal
*/

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/" className="flex gap-4">
            <Image src="/vercel.svg" width={30} height={30} alt="logo" />
            Kasih Info!
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
