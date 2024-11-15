"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  const handleScroll = () => {
    router.push("/ExploreCar")
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title max-md:text-4xl">
          Find, book, or rent a car — quickly and easily!
        </h1>
        <p className="hero__subtitle max-md:text-xl">
          Streamline your car experince with our efortless booking process.
        </p>
        <div
          title="Explore Cars"
          className="bg-primary-blue text-white rounded-full mt-10 hover:bg-[#e1e0e0] hover:text-primary-blue transition-all cursor-pointer w-fit px-5 py-3"
          onClick={handleScroll}
        >Explore Cars</div>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
          <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
