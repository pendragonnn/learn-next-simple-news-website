/* 
  layout merupakan komponen yang membungkus semua halaman di dalam folder tertentu. untuk pertama kalinya layout ini akan menjadi pembungkus dari page.tsx yang sudah secara otomatis dibuat oleh nextjs ketika membuat project baru

  bisa juga dalam folder tertentu dibuat layout lagi yang akan membungkus halaman-halaman di dalam folder tersebut

  misalnya di dalam folder src/app dibuat folder blog, maka di dalam foldeer blog tersebut bida dibuat layout.tsx lagi yang akan memubungkus halaman page.tsx di dalam folder blog tersebut.

*/

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* 
metode pemanggilan komponen dengan absolute import memanfaatkan @ sebagai alias dari folder src agar tidak perlu lagi menggunakan relative path yang kadang membingungkan dan membuat kode menjadi panjang 
*/
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*
  metadata ini adalah fitur dari nextjs untuk mengatur metadata dari halaman web seperti title, description, dan lain-lain secara terstruktur. metadata ini berguna untuk SEO (Search Engine Optimization) dan untuk memberikan informasi yang lebih baik tentang halaman web kepada mesin pencari dan browser.
*/

export const metadata: Metadata = {
  title: "Next JS News App",
  description: "Ini adalah situs berita tentang Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
