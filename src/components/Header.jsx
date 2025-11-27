/*
  komponen Link adalah komponen bawaan Next.js yang dipakai untuk membuat navigasi antar halaman tanpa reluad penuh (client-side navigation). 
  komponen ini:
  - hanya mengganti konten halaman
  - tidak memuat ulang CSS/JS seluruhnya
  - tidak menghapus state global (misalnya context)
  - mengambil data halaman terlebih dahulu, bahkan sebelum user klik
  - langsung bekerja dengan sistem routing Next.js 
*/
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/">Kasih Info</Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
