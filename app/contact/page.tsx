import Image from "next/image";
import heroImg from "../../public/hero-imgs/hero.png";
import { Container } from "@mui/material";

export default function Contact() {
  return (
    <div className="lg:bg-[#171D5B]">
      <div className="rounded-t-4xl bg-white pt-7">
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <Image
            src={heroImg}
            alt="soumteck img"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-[#171D5B]/50" />

          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: { xs: 4, sm: 6, md: 8 },
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <div
              className="w-full max-w-[68.87rem] bg-white/10 backdrop-blur-md
              rounded-lg sm:rounded-xl lg:rounded-[1.1rem]
              p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center gap-4 md:gap-6"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 w-full">
                <div className="flex flex-col grow basis-0">
                  <label className="p-1 sm:p-2 text-white text-sm sm:text-base">
                    الاسم
                  </label>
                  <input
                    type="text"
                    className="bg-white py-3 sm:py-4 w-full rounded-lg px-3 text-sm sm:text-base outline-none"
                    placeholder="ادخل الاسم"
                  />
                </div>
                <div className="flex flex-col grow basis-0">
                  <label className="p-1 sm:p-2 text-white text-sm sm:text-base">
                    البريد الالكتروني
                  </label>
                  <input
                    type="text"
                    className="bg-white py-3 sm:py-4 w-full rounded-lg px-3 text-sm sm:text-base outline-none"
                    placeholder="ادخل البريد الالكتروني"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 w-full">
                <div className="flex flex-col grow basis-0">
                  <label className="p-1 sm:p-2 text-white text-sm sm:text-base">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    className="bg-white py-3 sm:py-4 w-full rounded-lg px-3 text-sm sm:text-base outline-none"
                    placeholder="ادخل الموضوع"
                  />
                </div>
                <div className="flex flex-col grow basis-0">
                  <label className="p-1 sm:p-2 text-white text-sm sm:text-base">
                    نوع المشكلة
                  </label>
                  <select className="bg-white py-3 sm:py-4 w-full rounded-lg px-3 text-gray-400 text-sm sm:text-base outline-none">
                    <option value="" className="text-black">
                      ما نوع المشكلة
                    </option>
                    <option value="paying" className="text-black">
                      خطأ في عمليات الدفع
                    </option>
                    <option value="ui" className="text-black">
                      خطأ في الواجهه
                    </option>
                    <option value="incorrect" className="text-black">
                      معلومات غير صحيحة
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <label className="p-1 sm:p-2 text-white text-sm sm:text-base">
                  الوصف
                </label>
                <textarea
                  className="bg-white py-3 sm:py-4 w-full rounded-lg px-3 text-sm sm:text-base outline-none resize-none min-h-30 sm:min-h-37.5 md:min-h-45"
                  placeholder="ادخل نوع المشكلة"
                />
              </div>

              <button className="w-full sm:w-[70%] md:w-[50%] lg:w-[26.31rem] py-3 sm:py-4 bg-[#EEA820] text-white rounded-lg cursor-pointer hover:bg-[#eea920ea] transition text-sm sm:text-base font-medium mt-2 sm:mt-4">
                ارسال
              </button>
            </div>

            <div className="flex justify-around items-center w-full max-w-160 mt-6 sm:mt-8 md:mt-10">
              <div className="relative w-28 h-8 sm:w-40 sm:h-12 md:w-52 md:h-16 lg:w-62 lg:h-22">
                <Image
                  src="/Companys-logos/overlay/1.png"
                  alt="overlay1 hero img"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-14 lg:w-[6.87rem] lg:h-[4.87rem]">
                <Image
                  src="/Companys-logos/overlay/2.png"
                  alt="overlay2 hero img"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
