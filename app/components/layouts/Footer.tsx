import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
export default function Footer() {
  return (
    <div className="px-6 md:px-10 pt-20 md:pt-40 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-right">
        <div>
          <Image
            className="relative rounded-xl"
            src="/main-logo/Logo2.png"
            width={101}
            height={35}
            alt="logo"
          />
          <p className="text-[#757575] text-sm w-full mt-5 leading-7">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى حيث يمكنك ن تولد مثل هذا النص أو العديد من
            النصوص الأخرى إضافة إلى الموقع الالكترونى.
          </p>

          <div className="flex gap-4 mt-5">
            <button className="border border-[#EAEAEA] p-2 rounded">
              <Instagram style={{ color: "#9E35A5" }} />
            </button>
            <button className="border border-[#EAEAEA] p-2 rounded">
              <XIcon sx={{ color: "black" }} />
            </button>
            <button className="border border-[#EAEAEA] p-2 rounded">
              <LinkedInIcon sx={{ color: "#0A66C2" }} />
            </button>
          </div>
        </div>

        {/* Main Menu */}
        <div>
          <h6 className="primary-label mb-8 font-bold">القائمة الرئيسية</h6>
          <div className="text-[#757575] flex flex-col gap-5 text-sm">
            <button>الضوابط الإعلانية الصادرة من الهيئة</button>
            <button>الشروط والأحكام</button>
            <button>ترخيص الهيئة العامة للعقار</button>
            <button>تواصل معنا</button>
          </div>
        </div>

        {/* Sections */}
        <div>
          <h6 className="primary-label mb-8 font-bold">الأقسام</h6>
          <div className="text-[#757575] flex flex-col gap-5 text-sm">
            <button>مكتبة الدعم</button>
            <button>الأسئلة الشائعة</button>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h6 className="primary-label mb-8 font-bold">تواصل معنا</h6>
          <div className="text-[#757575] flex flex-col gap-5 text-sm">
            <div className="flex gap-2 items-start">
              <MapPin size={18} />
              <span>الرياض حي الملك فيصل، السعودية</span>
            </div>
            <div className="flex gap-2 items-center">
              <Phone size={18} />
              <span>+966 570 212 216</span>
            </div>
            <div className="flex gap-2 items-center">
              <Mail size={18} />
              <span>info@soum.tech</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-[#EAEAEA] my-10" />

      <div className="text-[#757575] text-sm text-center md:text-right">
        جميع الحقوق محفوظة - لــ سومتك {new Date().getFullYear()}©
      </div>
    </div>
  );
}
