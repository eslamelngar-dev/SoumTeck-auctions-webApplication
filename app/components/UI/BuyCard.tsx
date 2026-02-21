import { cardProps } from "@/app/types/auctions";
import { X, CheckCircle } from "lucide-react";
import GavelIcon from "@mui/icons-material/Gavel";
import { useState } from "react";

type Step = "form" | "loading" | "success";

export function BuyCard({
  count,
  pricePerMeter,
  total,
  tax,
  fee,
  onClose,
}: cardProps) {
  const [step, setStep] = useState<Step>("form");

  const handleConfirm = () => {
    setStep("loading");
    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  // ===== Loading =====
  if (step === "loading") {
    return (
      <div className="fixed inset-0 bg-black/65 flex justify-center items-center z-50 p-4">
        <div className="bg-white relative z-10 w-full max-w-sm rounded-2xl p-10 flex flex-col items-center gap-6 shadow-2xl">
          {/* Spinner */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-[#EAECF0]" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#EEA820] animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <GavelIcon sx={{ color: "#EEA820", fontSize: 28 }} />
            </div>
          </div>

          <h2 className="text-lg font-bold text-[#171D5B]">
            جاري تقديم السوم...
          </h2>

          <p className="text-[#667085] text-sm text-center">
            يرجى الانتظار لحظات
          </p>
          <div className="w-full bg-[#EAECF0] rounded-full h-2 overflow-hidden">
            <div className="bg-[#EEA820] h-full rounded-full animate-progress" />
          </div>

          <style jsx>{`
            @keyframes progress {
              0% {
                width: 0%;
              }
              100% {
                width: 100%;
              }
            }
            .animate-progress {
              animation: progress 2s ease-in-out forwards;
            }
          `}</style>
        </div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="fixed inset-0 bg-black/65 flex justify-center items-center z-50 p-4">
        <div className="absolute inset-0" onClick={onClose} />
        <div className="bg-white relative z-10 w-full max-w-md rounded-2xl p-8 flex flex-col items-center gap-5 shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition cursor-pointer"
          >
            <X size={22} />
          </button>

          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center">
            <CheckCircle size={45} className="text-green-500" />
          </div>

          <h2 className="text-xl font-bold text-[#171D5B]">
            تم إضافة سومتك بنجاح!
          </h2>

          <p className="text-[#667085] text-center text-sm">
            تم تقديم سوم بمبلغ{" "}
            <span className="text-[#EEA820] font-bold text-lg">
              {count.toLocaleString()}
            </span>{" "}
            ريال
          </p>

          <button
            onClick={onClose}
            className="bg-[#171D5B] text-white rounded-lg w-full h-12 cursor-pointer
                      hover:bg-[#1a2068] active:scale-[0.98] transition font-medium mt-2"
          >
            تم
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/65 flex justify-center items-center z-50 p-4">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="bg-white relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl rounded-2xl p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition cursor-pointer"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col items-center gap-3">
          <div className="bg-[#EEA820]/10 w-14 h-14 rounded-full flex items-center justify-center">
            <GavelIcon sx={{ color: "#EEA820", fontSize: 28 }} />
          </div>
          <p className="text-lg sm:text-xl font-bold text-[#171D5B]">
            اضف سومتك
          </p>
          <p className="text-[#171D5B] text-base sm:text-lg font-medium text-center">
            هل ترغب في السوم بمبلغ{" "}
            <span className="text-[#EEA820] font-bold text-xl sm:text-2xl">
              {count.toLocaleString()}
            </span>{" "}
            ريال؟
          </p>
        </div>

        <hr className="border-[#EAECF0]" />

        <div className="flex flex-col gap-4">
          <p className="text-[#667085] text-sm sm:text-base font-medium text-center">
            تفاصيل المزاد
          </p>

          <div className="flex flex-col gap-3 bg-[#F9FAFB] rounded-xl p-4 sm:p-5">
            <div className="flex flex-col gap-3 bg-[#F9FAFB] rounded-xl p-4 sm:p-5">
              <div className="flex justify-between items-center">
                <p className="text-[#667085] text-sm sm:text-base">سعر المتر</p>
                <div className="flex gap-1 items-baseline">
                  <p className="text-[#171D5B] font-semibold text-sm sm:text-base">
                    {pricePerMeter.toLocaleString()}
                  </p>
                  <span className="text-[#667085] text-xs sm:text-sm">
                    ريال
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#667085] text-sm sm:text-base">الأجمالي</p>
                <div className="flex gap-1 items-baseline">
                  <p className="text-[#171D5B] font-semibold text-sm sm:text-base">
                    {total.toLocaleString()}
                  </p>
                  <span className="text-[#667085] text-xs sm:text-sm">
                    ريال
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#667085] text-sm sm:text-base">
                  ضريبة السعي
                </p>
                <div className="flex gap-1 items-baseline">
                  <p className="text-[#171D5B] font-semibold text-sm sm:text-base">
                    {tax.toLocaleString()}
                  </p>
                  <span className="text-[#667085] text-xs sm:text-sm">
                    ريال
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#667085] text-sm sm:text-base">السعي</p>
                <div className="flex gap-1 items-baseline">
                  <p className="text-[#171D5B] font-semibold text-sm sm:text-base">
                    {fee.toLocaleString()}
                  </p>
                  <span className="text-[#667085] text-xs sm:text-sm">
                    ريال
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-[0.7rem] sm:text-xs text-[#667085]">
          <div className="flex items-start gap-2">
            <span className="text-[#EEA820] mt-0.5">●</span>
            <p>بالضغط علي زر أضف سومتك، فانك توافق علي الشروط وأحكام المزاد.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#EEA820] mt-0.5">●</span>
            <p>
              السعر الاجمالي لا يشمل ضريبة التصرفات العقارية ويتحملها المشتري.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={onClose}
            className="border border-[#D0D5DD] text-[#344054] rounded-lg text-sm sm:text-base
                      w-full sm:w-1/2 h-11 sm:h-12 cursor-pointer
                    hover:bg-gray-50 hover:border-[#98A2B3] transition font-medium"
          >
            الغاء
          </button>
          <button
            onClick={handleConfirm}
            className="bg-[#EEA820] text-white rounded-lg text-sm sm:text-base
                      w-full sm:w-1/2 h-11 sm:h-12 cursor-pointer
                      hover:bg-[#d99518] active:scale-[0.98] transition font-medium
                      flex items-center justify-center gap-2"
          >
            <GavelIcon sx={{ fontSize: 18 }} />
            تأكيد السوم
          </button>
        </div>
      </div>
    </div>
  );
}
