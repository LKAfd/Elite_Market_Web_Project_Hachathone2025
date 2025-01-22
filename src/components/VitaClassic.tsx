import Image from "next/image";
import shopHero from "../../public/assets/shop-hero-2.jpg";
import winterImage from "../../public/assets/asian-winter-clothes.jpg";

const VitaClassic = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col lg:flex-row text-black items-center gap-8 py-12">
        <div className="relative w-full h-[709px] bg-blue-500 text-white">
          {/* Background Image */}
          <Image
            src={shopHero}
            alt="manhero"
            height={709}
            width={1440}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
            <div className="md:w-1/2 text-white text-center sm:text-start md:text-start md:ml-10">
              <p className="uppercase text-sm tracking-widest mb-7 text-white">
                Summer 2020
              </p>
              <h1 className="text-6xl font-bold my-4">Vita Classic Product</h1>{" "}
              {/* Increased font size */}
              <p className="text-lg my-6">
                We know how large objects will act, <br />
                We know how large objects will act, We know
              </p>
              <div className="w-[295px] h-[52px] flex gap-[34px]">
                <h3 className="w-[77px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] text-white">
                  $16.48
                </h3>
                <button className="w-[184px] h-[52px] rounded-[5px] px-[40px] font-semibold bg-[#2DC071] py-[15px] flex gap-[10px]">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winter Section */}
      <section className="flex flex-col lg:flex-row text-black items-center gap-32 px-20 py-12">
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={winterImage}
            alt="winterhero"
            width={1440}
            height={639}
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-xl font-semibold mb-4">SUMMER 2020</p>
          <h2 className="text-4xl font-bold mb-4">
            Part of the Neural
            <br />
            Universe
          </h2>
          <p className="text-gray-600 mb-6">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>
          <div className="flex gap-7">
            <button className="bg-green-700 text-white px-6 py-3 border border-green-700 rounded-lg hover:bg-sky-950 hover:text-purple-300">
              BUY NOW
            </button>
            <button className="bg-white text-green-700 px-6 py-3 border border-green-700 rounded-lg hover:bg-sky-950 hover:text-purple-300">
              READ MORE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VitaClassic;
