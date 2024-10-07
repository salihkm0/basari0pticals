// const products = [
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   {
//     id: 1,
//     name: "Basic Tee",
//     href: "#",
//     imageSrc:
//       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in black.",
//     price: "$35",
//     color: "Black",
//   },
//   // More products...
// ];

// export default function ProductList({title}) {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl py-16 sm:py-16 lg:max-w-7xl">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//           {title}
//         </h2>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <div key={product.id} className="group relative">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                 <img
//                   alt={product.imageAlt}
//                   src={product.imageSrc}
//                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                 />
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <a href={product.href}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {product.name}
//                     </a>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">
//                   {product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://assets.ajio.com/medias/sys_master/root/20240713/RYgu/66922da46f60443f3106a1c1/-473Wx593H-464805313-brown-MODEL.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://m.media-amazon.com/images/I/91CDvsP0CyL._AC_UY1100_.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGkgokQWkeIrVRPnZyhMWocf70GRzDiU9Xw&s",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8hyY6uY2wLIYq9wPWXoovXXZMsC4mi2YvA&s",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

const responsive = {
  superLargeDesktop: {
    // The container will have 5 items at a time (for large screens)
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    // 4 items on desktops
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    // 2 items on tablets
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    // 1 item on mobile
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ProductList({ title }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[90vw] py-16 sm:py-16 mt-[30px]">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          containerClass="carousel-container"
        //   itemClass="carousel-item-padding-40-px"
        >
          {products.map((product) => (
            <div key={product.id} className="group relative mx-2 w-[300px] h-auto mt-[20px] max-h-[500px]">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
