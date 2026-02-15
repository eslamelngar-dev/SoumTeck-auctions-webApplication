import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
export default function Footer() {
  return (
    <>
      <div className="px-10 pt-50 pb-10">
        <div className="flex flex-col">
          <div className="flex justify-around">
            <div>
              <Image
                className={` relative rounded-xl`}
                src="/main-logo/Logo2.png"
                width={101}
                height={35}
                alt="logo"
              />
              <p className="text-[#757575] text-[0.87rem] w-[19.8rem] mt-5">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى حيث يمكنك ن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى الموقع الالكترونى.
              </p>
              <div className="flex gap-5 mt-5">
                <button className="border border-[#EAEAEA] p-2 rounded">
                  <Instagram
                    style={{
                      color: "#9E35A5",
                      borderRadius: "0.3rem",
                    }}
                  />
                </button>
                <button className="border border-[#EAEAEA] p-2 rounded">
                  <XIcon sx={{ color: "black" }} />
                </button>
                <button className="border border-[#EAEAEA] p-2 rounded">
                  <LinkedInIcon sx={{ color: "#0A66C2", fontSize: "1.8rem" }} />
                </button>
              </div>
            </div>
            <div>
              <h6 className="primary-label mb-[2.8rem] font-bold ">القائمة الرئيسية</h6>
              <div className="text-[#757575] flex flex-col items-start gap-7">
                <button className="cursor-pointer">الضوابط الإعلانية الصادرة من الهيئة</button>
                <button className="cursor-pointer">الشروط والأحكام</button>
                <button className="cursor-pointer">ترخيص الهيئة العامة للعقار</button>
                <button className="cursor-pointer">تواصل معنا</button>
              </div>
            </div>
            <div>
              <h6 className="primary-label mb-[2.8rem] items-start font-bold">الأقسام</h6>
              <div className="text-[#757575] flex flex-col gap-7">
                <button className="cursor-pointer">مكتبة الدعم</button>
                <button className="cursor-pointer">الأسئلة الشائعة</button>
              </div>
            </div>
            <div>
              <h6 className="primary-label mb-[2.8rem] items-start font-bold">تواصل معنا</h6>
              <div className="text-[#757575] flex flex-col gap-7">
                <button className="flex gap-2 cursor-pointer">
                  <MapPin />
                  الرياض حي الملك فيصل، السعودية
                </button>
                <button className="flex gap-2 cursor-pointer">
                  <Phone />
                  +966 570 212 216
                  </button>
                <button className="flex gap-2 cursor-pointer">
                    <Mail />
                  info@soum.tech
                  </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-[#EAEAEA] my-10" />
        <div className="text-[#757575]">
          جميع الحقوق محفوظة - لــ سومتك {new Date().getFullYear()}©
        </div>
      </div>
    </>
  );
}
