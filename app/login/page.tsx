import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="w-full h-[calc(100vh-7rem)] bg-cover bg-center bg-no-repeat bg-[url('/hero-imgs/loginImage.png')]">
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div className="overlay flex flex-col items-center justify-center px-4 py-6 gap-10">
            <div className="relative w-[40%] sm:w-[45%] lg:w-60 h-12 sm:h-16 lg:h-25">
              <Image
                src="/main-logo/logo.png"
                alt="logo1"
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-white lg:w-[33.6rem] lg:h-[30.6rem] rounded-xl flex justify-between flex-col">
              <div className="w-full flex justify-center items-center text-3xl font-bold pt-12">
                <p>تسجيل الدخول</p>
              </div>
              <div className="flex flex-col px-6">
                <div className="flex flex-col font-normal">
                  <label className="p-2">رقم الجوال او الايميل</label>
                  <input
                    type="text"
                    className="bg-[#FAFAFA] py-4 w-full rounded-lg"
                    placeholder="ادخل رقم الجوال او الايميل"
                  />
                </div>
                <div className="flex flex-col font-normal">
                  <label className="p-2">كلمة المرور</label>
                  <input
                    type="password"
                    className="bg-[#FAFAFA] py-4 w-full rounded-lg"
                    placeholder="ادخل كلمة المرور"
                  />
                </div>
                <div className="py-3">
                  <a href="#">
                    <p className="text-[#1E66F2] text-sm">نسيت كلمة المرور</p>
                  </a>
                </div>
              </div>
              <div className="flex w-full pb-10 justify-around">
                <Link href={`#`}>
                  <button className="bg-[#EEA820] font-semibold text-white rounded-md text-[0.81rem] w-[14.43rem] h-[3.43rem] cursor-pointer hover:bg-[#d99518] transition">
                    تسجيل الدخول
                  </button>
                </Link>
                <Link href={`#`}>
                  <button className="bg-white font-semibold text-[#EEA820] border border-[#EEA820] rounded-md text-[0.81rem] w-[14.43rem] h-[3.43rem] cursor-pointer hover:-translate-y-1 transition duration-200">
                    تسجيل الدخول من خلال انفاذ
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex gap-25 ">
              <div className="relative w-[40%] sm:w-[45%] lg:w-62 h-12 sm:h-16 lg:h-22 ">
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
    </>
  );
}
