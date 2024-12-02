// import { Link } from "@/i18n/routing";
// import { getTranslations } from "next-intl/server";
import Image from "next/image";
import bgImg from "@/public/images/hero-bg.png";

export default async function Home() {
  // const t = await getTranslations("HomePage");
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div>
          <Image
            src={bgImg}
            alt="Hero Background"
            fill
            className="-z-10"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col text-center text-white z-10 mb-10 md:mb-20">
          <h1 className="text-4xl md:text-6xl font-bold">
            The Future Of Point Of Sale
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>

      {/* Section */}
      <div className="bg-yellow-500 h-screen w-full"></div>
    </>
  );
}
