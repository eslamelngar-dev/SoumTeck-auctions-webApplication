import Image from "next/image";
import heroImg from "../../../public/hero-imgs/hero.png";
import company1 from "../../../public/Companys-logos/1.png";
import company2 from "../../../public/Companys-logos/2.png";
import company3 from "../../../public/Companys-logos/3.png";
import company4 from "../../../public/Companys-logos/4.png";
import company5 from "../../../public/Companys-logos/5.png";
import overlay1 from "../../../public/Companys-logos/overlay/1.png";
import overlay2 from "../../../public/Companys-logos/overlay/2.png";
import { Container } from "@mui/material";

export default function Hero() {
  return (
    <>
      <div className="lg:bg-[#171D5B] ">
        <div id="hero" className="rounded-t-4xl bg-white pt-7">
          <Container maxWidth="xl">
            <div className="relative mx-auto w-full h-72 sm:h-88 md:h-100 lg:h-112 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
              <Image
                src={heroImg}
                alt="soumteck hero img"
                fill
                className="object-cover"
                priority
              />
              <div className="overlay absolute inset-0 bg-[#171D5B]/50 flex flex-col items-center justify-center px-4">
                <div className="text-center mb-20 sm:mb-24 md:mb-28 lg:mb-32">
                  <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.3rem] text-white font-[750] mb-2 sm:mb-3">
                    أضف سومتك وين ما كنت!
                  </h5>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[1rem] text-white font-normal mx-auto">
                    منصة سومتك تجمع لك بين عرض العقارات أو المشاركة في المزاد
                    بطريقة سهلة وسريعة في بيئة إلكترونية موثوقة!
                  </p>
                </div>
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 
                  w-[90%] sm:w-[85%] md:w-[75%] lg:w-162 
                  h-20 sm:h-24 md:h-26 lg:h-28 
                  bg-white/5 backdrop-blur-md 
                  flex justify-around items-center 
                  rounded-lg sm:rounded-xl lg:rounded-[1.1rem]
                  px-4 sm:px-6"
                >
                  <div className="relative w-[40%] sm:w-[45%] lg:w-62 h-12 sm:h-16 lg:h-22">
                    <Image
                      src={overlay1}
                      alt="overlay1 hero img"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative w-[30%] sm:w-[35%] lg:w-[6.87rem] h-10 sm:h-14 lg:h-[4.87rem]">
                    <Image
                      src={overlay2}
                      alt="overlay2 hero img"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 text-center px-4">
              <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                شركات المزادات
              </p>
              <div className="hidden lg:flex justify-center gap-8 xl:gap-[4.7rem]">
                <div className="relative w-35 xl:w-50 h-10 xl:h-15">
                  <Image
                    src={company1}
                    alt="company 1"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-35 xl:w-50 h-10 xl:h-15">
                  <Image
                    src={company2}
                    alt="company 2"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-35 xl:w-50 h-10 xl:h-15">
                  <Image
                    src={company3}
                    alt="company 3"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-35 xl:w-50 h-10 xl:h-15">
                  <Image
                    src={company4}
                    alt="company 4"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-35 xl:w-50 h-10 xl:h-15">
                  <Image
                    src={company5}
                    alt="company 5"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="hidden md:grid lg:hidden grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="relative w-full h-12.5">
                  <Image
                    src={company1}
                    alt="company 1"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-12.5">
                  <Image
                    src={company2}
                    alt="company 2"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-12.5">
                  <Image
                    src={company3}
                    alt="company 3"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-12.5">
                  <Image
                    src={company4}
                    alt="company 4"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-12.5">
                  <Image
                    src={company5}
                    alt="company 5"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-12.5 md:hidden lg:hidden">
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:hidden max-w-sm mx-auto">
                <div className="relative w-full h-10">
                  <Image
                    src={company1}
                    alt="company 1"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-10">
                  <Image
                    src={company2}
                    alt="company 2"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-10">
                  <Image
                    src={company3}
                    alt="company 3"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-10">
                  <Image
                    src={company4}
                    alt="company 4"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-full h-10 col-span-2">
                  <Image
                    src={company5}
                    alt="company 5"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
