/*
  menambahkan route about pada nextjs caranya cukup mudah yaitu dengan membuat folder baru di dalam folder app dengan nama sesuai dengan yang diinginkan (misalnya about) kemudian di dalam folder about tersebut dibuat file page.jsx atau page.tsx yang akan menjadi halaman utama dari route about tersebut.
*/

import Image from "next/image";

function page() {
  return (
    <>
    <div className="relative w-full h-50 my-5">
      <Image src="https://i.pinimg.com/1200x/0d/ec/90/0dec90825070c458c452bbe44d147d5e.jpg" alt="about image" fill />
    </div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
        provident dolorum alias nihil tempora quia sunt atque tempore facere
        maiores. Nihil ullam recusandae harum quod, reiciendis voluptatum optio
        provident nobis quibusdam ipsam officia aliquid enim laudantium quam
        perspiciatis accusantium dicta ab iste dolorum praesentium tempora non
        consequuntur facilis quas. Esse asperiores enim doloremque at, itaque
        cumque incidunt obcaecati repellendus assumenda! Necessitatibus numquam
        adipisci, expedita perspiciatis nam quas. Voluptatum animi dolores
        doloribus velit provident repudiandae facilis harum? Distinctio impedit
        numquam facilis dolorum nemo! Tenetur reiciendis repellendus nisi iure
        facere repellat necessitatibus. Facere veritatis amet corrupti
        distinctio fugit quae atque, iste natus veniam perspiciatis aliquam
        totam tempora soluta! Quia et accusantium, ratione obcaecati recusandae
        sint ullam consequuntur aliquam inventore aperiam velit culpa quibusdam
        architecto autem deleniti molestias soluta numquam suscipit cupiditate
        nemo reiciendis, temporibus laudantium nihil tempore. Repellendus
        incidunt ea eum. Minus consequuntur consectetur iure animi error harum
        repellat sunt doloribus ipsa architecto rem eligendi ipsam, nemo autem
        eum illo minima id. Autem illo sit ad vero dolorum et pariatur impedit
        architecto eius, molestias exercitationem obcaecati perspiciatis
        laudantium commodi libero magnam odio ducimus dolore eum atque
        perferendis quae. Id adipisci, earum aliquid rerum odio consectetur
        itaque voluptates dolor deleniti enim, repellat obcaecati!
      </p>
    </>
  );
}

export default page;
