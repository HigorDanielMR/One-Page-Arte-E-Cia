// "use client"
// import Image from 'next/image'
// import React, { useEffect, useRef, useState } from 'react'

// const Carrossel = ({ data }: { data: { image: string }[] }) => {
//     // State and Ref initialization
//     const [currentImg, setCurrentImg] = useState(0)
//     const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
//     const carouselRef = useRef(null)

//     // useEffect to get the initial carousel size
//     useEffect(() => {
//         let elem = carouselRef.current as unknown as HTMLDivElement
//         let { width, height } = elem.getBoundingClientRect()
//         if (carouselRef.current) {
//             setCarouselSize({
//                 width,
//                 height,
//             })
//         }
//     }, [])

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             {/* Carousel container */}
//             <div className='w-full max-w-4xl h-96 rounded-xl overflow-hidden shadow-xl bg-white relative'>
//                 {/* Image container */}
//                 <div
//                     ref={carouselRef}
//                     style={{
//                         left: -currentImg * carouselSize.width
//                     }}
//                     className='w-full h-full absolute flex transition-all duration-500 ease-in-out'>
//                     {/* Map through data to render images */}
//                     {data.map((v, i) => (
//                         <div key={i} className='relative shrink-0 w-full h-full'>
//                             <Image
//                                 className='pointer-events-none object-contain'  // 'object-contain' to prevent cropping
//                                 alt={`carousel-image-${i}`}
//                                 fill
//                                 src={v.image || "https://random.imagecdn.app/500/500"}
//                             />
//                         </div>
//                     ))}
//                 </div>
                
//                 {/* Navigation buttons */}
//                 <div className='absolute top-1/2 transform -translate-y-1/2 left-4 z-10'>
//                     <button
//                         disabled={currentImg === 0}
//                         onClick={() => setCurrentImg(prev => prev - 1)}
//                         className={`bg-white border-2 border-gray-400 text-gray-700 p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 transition-colors`}
//                     >
//                         &lt;
//                     </button>
//                 </div>
//                 <div className='absolute top-1/2 transform -translate-y-1/2 right-4 z-10'>
//                     <button
//                         disabled={currentImg === data.length - 1}
//                         onClick={() => setCurrentImg(prev => prev + 1)}
//                         className={`bg-white border-2 border-gray-400 text-gray-700 p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 transition-colors`}
//                     >
//                         &gt;
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Carrossel


// 'use client'; // Adicione isso no início do arquivo para tornar o componente um Client Component

// import React from 'react';
// import Masonry from 'react-masonry-css';
// import Image from 'next/image';

// interface Produto {
//   img: string;
//   descricao: string;
// }

// const Teste: React.FC = () => {
//   const testes: Produto[] = [
//     { img: '/images/Produtos/Banco_De_Piscina_Com_Encosto.jpg', descricao: 'Produto 1 - Descrição curta' },
//     { img: '/images/Produtos/Banco_De_Piscina_Com_Encosto.jpg', descricao: 'Produto 2 - Descrição curta' },
//     // Adicione os outros produtos aqui...
//   ];

//   const breakpointColumnsObj = {
//     default: 4,
//     1100: 3,
//     700: 2,
//     500: 1
//   };

//   return (
//     <Masonry
//       breakpointCols={breakpointColumnsObj}
//       className="my-masonry-grid"
//       columnClassName="my-masonry-grid_column"
//     >
//       {testes.map((teste, index) => (
//         <div key={index} className="card">
//           <Image 
//             src={teste.img} 
//             alt={`Produto ${index + 1}`} 
//             width={300} 
//             height={200} 
//             layout="intrinsic" 
//           />
//           <p>{teste.descricao}</p>
//         </div>
//       ))}
//     </Masonry>
//   );
// };

// export default Teste;


import Image from 'next/image';

export default function Teste() {
  const produtos = [
    { img: '/images/Produtos/Banco_De_Piscina_Com_Encosto.jpg', descricao: 'Produto 1 - Descrição curta' },
    { img: '/images/Produtos/Banco_De_Piscina_Com_Encosto.jpg', descricao: 'Produto 2 - Descrição curta' },
    // Adicione os outros produtos aqui...
  ];

  return (
    <div >
      {produtos.map((produto, index) => (
        <div key={index}>
          <Image src={produto.img} alt={`Imagem do produto ${index + 1}`} width={300} height={200} />
          <p>{produto.descricao}</p>
        </div>
      ))}
    </div>
  );
}
