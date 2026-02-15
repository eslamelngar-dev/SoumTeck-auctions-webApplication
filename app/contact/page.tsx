import Image from "next/image";
import heroImg from "../../public/hero-imgs/hero.png";
import { Container } from "@mui/material";

export default function Contact() {
  return (
    <>
      <div className="lg:bg-[#171D5B] ">
        <div className="rounded-t-4xl bg-white pt-7">
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              height: "100vh",
            }}
          >
            <div>
              <Image
                src={heroImg}
                alt="soumteck img"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="overlay absolute inset-0 bg-[#171D5B]/50 flex flex-col items-center justify-center px-4">
              <div
                className="absolute left-1/2 -translate-x-1/2 
                w-[68.87rem] h-[40.12rem]
                  bg-white/10 backdrop-blur-md 
                  rounded-lg sm:rounded-xl lg:rounded-[1.1rem]
                  p-10 flex flex-col items-center
                  "
              >
                <div className="flex gap-12">
                  <div className="flex flex-col">
                    <label className="p-2">الاسم</label>
                    <input
                      type="text"
                      className="bg-white py-4 w-[30.06rem] rounded-lg"
                      placeholder="ادخل الاسم"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="p-2">البريد الالكتروني</label>
                    <input
                      type="text"
                      className="bg-white py-4 w-[30.06rem] rounded-lg"
                      placeholder="ادخل البريد الالكتروني"
                    />
                  </div>
                </div>
                <div className="flex gap-12">
                  <div className="flex flex-col">
                    <label className="p-2">الموضوع</label>
                    <input
                      type="text"
                      className="bg-white py-4 w-[30.06rem] rounded-lg"
                      placeholder="ادخل الموضوع"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="p-2">نوع المشكلة</label>
                    <select
                      className="bg-white py-4 w-[30.06rem] rounded-lg text-gray-300">
                        <option value="paying" className="text-black">ما نوع المشكلة</option>
                        <option value="paying" className="text-black">خطأ في عمليات الدفع</option>
                        <option value="ui" className="text-black">خطأ في الواجهه</option>
                        <option value="incorrect" className="text-black">معلومات غير صحيحة</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-full h-full">
                  <label className="p-2">الوصف</label>
                  <textarea
                    className="bg-white py-4 w-full h-full rounded-lg"
                    placeholder="ادخل نوع المشكلة"
                  />
                </div>
                <button className="w-[26.31rem] h-[3.43rem] py-5 bg-[#EEA820] text-white mt-10 rounded-lg cursor-pointer hover:bg-[#eea920ea] transition">
                  ارسال
                </button>
              </div>
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 
                  w-[90%] sm:w-[85%] md:w-[75%] lg:w-162
                  h-20 sm:h-24 md:h-26 lg:h-28
                  flex justify-around items-center 
                  rounded-lg sm:rounded-xl lg:rounded-[1.1rem]
                  px-4 sm:px-6 my-5"
              >
                <div className="relative w-[40%] sm:w-[45%] lg:w-62 h-12 sm:h-16 lg:h-22">
                  <Image
                    src="/Companys-logos/overlay/1.png"
                    alt="overlay1 hero img"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-[30%] sm:w-[35%] lg:w-[6.87rem] h-10 sm:h-14 lg:h-[4.87rem]">
                  <Image
                    src="/Companys-logos/overlay/2.png"
                    alt="overlay2 hero img"
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
