import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import FeaturedPosts from "../components/FeaturedPosts";
import EditorsPick from "../components/EditorPics";
import VitaClassic from "@/components/VitaClassic";
import ProductCards from "./Products/page";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <EditorsPick />
      <section className="py-12 bg-gray-100">
        <p className="text-center text-xl font-semibold text-[#737373] mb-8">
          Featured Products
        </p>
        <h2 className="text-center text-3xl font-bold mb-8">
          Bestseller Products
        </h2>
        <p className="text-center text-xl text-[#737373]  mb-8">
          Trying to resolve the conflict between
        </p>
        <ProductGrid />
      </section>
      <section className="py-12">
        <VitaClassic />
      </section>
      <section className="py-12">
        <FeaturedPosts />
        <ProductCards />
      </section>
    </div>
  );
}
