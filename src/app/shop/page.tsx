import React from "react";
import Image from "next/image";

const ProductListPage = () => {
  const productImages = [
    "/images/product-cover-1.jpg",
    "/images/product-cover-2.jpg",
    "/images/product-cover-3.jpg",
    "/images/product-cover-4.jpg",
    "/images/product-cover-5.jpg",
    "/images/product-cover-6.jpg",
    "/images/product-cover-7.jpg",
    "/images/product-cover-8.jpg",
    "/images/product-cover-9.jpg",
    "/images/product-cover-10.jpg",
    "/images/product-cover-11.jpg",
    "/images/product-cover-12.jpg",
  ];

  return (
    <main className="font-sans">
      {/* Shop Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Shop</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productImages.map((image, index) => (
              <div key={index} className="bg-white shadow-md p-4 text-center">
                <Image
                  src={image}
                  alt={`Product ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
                <h3 className="font-semibold mt-2">Graphic Design</h3>
                <p>English Department</p>
                <p>
                  <span className="line-through text-gray-500">$16.48</span>
                  <span className="text-green-600 font-bold"> $6.48</span>
                </p>
                <div className="flex justify-center mt-2 space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-4 h-4 bg-blue-400 rounded-full"
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Filter Section */}
          <div className="flex justify-between items-center mt-6">
            <span>Showing all 12 results</span>
            <div className="flex space-x-2">
              <button className="bg-gray-200 px-4 py-2">Grid View</button>
              <button className="bg-gray-200 px-4 py-2">List View</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductListPage;
