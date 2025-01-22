import Image from "next/image";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Graphic Design",
      description: "English Department",
      price: "$16.48",
      newPrice: "$6.48",
      image: "/images/product-0.jpg",
    },
    {
      id: 2,
      name: "Graphic Design",
      description: "English Department",
      price: "$16.48",
      newPrice: "$6.48",
      image: "/images/product-1.jpg",
    },
    {
      id: 3,
      name: "Graphic Design",
      description: "English Department",
      price: "$16.48",
      newPrice: "$6.48",
      image: "/images/product-2.jpg",
    },
    {
      id: 4,
      name: "Graphic Design",
      description: "English Department",
      price: "$16.48",
      newPrice: "$6.48",
      image: "/images/product-3.jpg",
    },
    {
      id: 5,
      name: "Graphic Design",
      description: "English Department",
      price: "$16.48",
      newPrice: "$6.48",
      image: "/images/product-4.jpg",
    },
    {
      id: 6,
      name: "Graphic Design",
      description: "English Department",
      price: "$16.48",
      newPrice: "$6.48",
      image: "/images/product-5.jpg",
    },
    {
      id: 7,
      name: "Graphic Design",
      description: "English Department",
      price: "$16.48",
      newPrice: "$6.48",
      image: "/images/product-6.jpg",
    },
    {
      id: 8,
      name: "Graphic Design",
      description: "English Department",
      price: "$16.48",
      newPrice: "$6.48",
      image: "/images/product-7.jpg",
    },
    // Add more products
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container px-8 mx-auto">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded p-4">
          <Image
            src={product.image}
            alt={product.name}
            width={239}
            height={427}
            className="object-cover rounded items-center"
          />
          <h3 className="mt-4 text-center font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-center font-semibold text-sm">
            {product.description}
          </p>
          <div className="w-full px-[3px] py-[5px] mt-2 flex justify-center gap-[5px]">
            <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
              {product.price}
            </h5>
            <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
              {product.newPrice}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
