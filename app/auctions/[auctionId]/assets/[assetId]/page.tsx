"use client";
import Countdown from "@/app/components/CountDown";
import { Assets } from "@/app/data/assets";
import { auctions } from "@/app/data/auctions";
import { Container } from "@mui/material";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import GavelIcon from "@mui/icons-material/Gavel";
import { useState } from "react";

export default function AssetDetailsPage() {
  const { auctionId, assetId } = useParams();
  const auction = auctions.find((a) => a._id === auctionId);
  const asset = Assets.find(
    (a) => a._id === assetId && a.auctionId === auctionId,
  );
  const [count, setCount] = useState(asset?.deposit ?? 0);

  if (!asset || !auction) {
    return (
      <Container maxWidth="xl" sx={{ py: 10, textAlign: "center" }}>
        <p className="text-2xl text-gray-500">الأصل غير موجود</p>
        <Link
          href="/auctions"
          className="text-[#EEA820] mt-4 block hover:underline"
        >
          العودة للمزادات
        </Link>
      </Container>
    );
  }
  const pricePerMeter = 200;
  const total = pricePerMeter * asset.space;
  const tax = total * 0.05;
  const fee = 500;
  return (
    <Container
      maxWidth="xl"
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        pb: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="w-full max-w-350 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4 lg:gap-8 py-4">
          <div className="flex items-center flex-wrap gap-1 text-sm">
            <Link
              href="/"
              className="text-[#667085] hover:text-[#EEA820] transition-colors"
            >
              الرئيسية
            </Link>
            <ChevronLeft size={16} className="text-gray-400" />
            <Link
              href="/auctions"
              className="text-[#667085] hover:text-[#EEA820] transition-colors"
            >
              المزادات
            </Link>
            <ChevronLeft size={16} className="text-gray-400" />
            <Link
              href={`/auctions/${auctionId}`}
              className="text-[#667085] hover:text-[#EEA820] transition-colors"
            >
              {auction.name}
            </Link>
            <ChevronLeft size={16} className="text-gray-400" />
            <span className="text-[#EEA820] font-medium">{asset.name}</span>
          </div>
          <div className="shrink-0">
            <div className="relative w-40 h-15 sm:w-50 sm:h-17.5 md:w-60 md:h-20">
              <Image
                src="/Companys-logos/auctions-companys.png"
                alt="auction logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
      <div className="flex gap-4 w-full">
        <div className="flex flex-col grow shadow-2xl rounded-2xl">
          <div className="flex justify-between py-10 px-4">
            <div className="flex">
              <p className="font-bold text-[1.5rem]">{asset.name}</p>
              <p className="text-[#6C6C6C] text-[0.8rem] mt-6">
                ({asset.location})
              </p>
            </div>
            <div>
              <p className="bg-[#57B73C] px-4 py-2 rounded-full text-white">
                انت اعلي مزايد
              </p>
            </div>
          </div>
          <hr className="border border-[#EAECF0A8]/66" />
          <div className="flex justify-between py-9 px-4">
            <p className="font-bold text-[1.125rem]">معرض الصور</p>
            <div>
              <p className="font-bold text-[1.125rem]">
                رقم التواصل: +966501759844
              </p>
            </div>
          </div>
          <div className="relative w-[95%] h-120 rounded-2xl mx-auto">
            <Image
              src={asset.image}
              alt={asset.name}
              fill
              className="rounded-2xl"
            />
          </div>
          <div className="px-5 py-5">
            <Countdown
              startDate={asset.startDate}
              endDate={asset.endDate}
              setClosed={() => false}
            />
          </div>
          <hr className="border border-[#EAECF0A8]/66 w-[95%] mx-auto" />
          <div className="flex justify-between px-10 py-8">
            <div className="flex flex-col gap-3 grow px-2">
              <p className="text-[#171D5B] text-[1.5rem] font-medium ">
                سعر السوم الحالي
              </p>
              <div className="flex text-[#EEA820] font-bold text-[1.62rem] gap-3">
                <p>{asset.bidPrice.toLocaleString()}</p>
                <span className="text-[1.4rem]">ر.س</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 grow px-2">
              <div className="flex justify-between">
                <p className="text-[#667085]">سعر المتر</p>
                <div className="flex gap-1">
                  <p className="text-[#171D5B] font-medium  ">
                    {pricePerMeter.toLocaleString()}
                  </p>
                  <span>ريال</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-[#667085]">الأجمالي</p>
                <div className="flex gap-1">
                  <p className="text-[#171D5B] font-medium  ">{total.toLocaleString()}</p>
                  <span>ريال</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-[#667085]">ضريبة السعي</p>
                <div className="flex gap-1">
                  <p className="text-[#171D5B] font-medium  ">{tax.toLocaleString()}</p>
                  <span>ريال</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-[#667085]">السعي</p>
                <div className="flex gap-1">
                  <p className="text-[#171D5B] font-medium  ">{fee.toLocaleString()}</p>
                  <span>ريال</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-[#EAECF0A8]/66 w-[95%] mx-auto" />
          <div className="border border-[#EAECF0A8]/66 w-full">
            <div className="flex">
              <div className="flex flex-col gap-5 p-10 text-center grow">
                <p className="text-[0.75rem] font-medium">عربون الدخول</p>
                <div className="flex gap-1 text-[#171D5B] text-[1.625rem] font-bold">
                  <p>{asset.deposit.toLocaleString()}</p>
                  <span>ر.س</span>
                </div>
              </div>
              <div className="flex flex-col gap-5 p-10 text-center grow">
                <p className="text-[0.75rem] font-medium">فرق السوم</p>
                <div className="flex gap-1 text-[#171D5B] text-[1.625rem] font-bold">
                  <p>1,000</p>
                  <span>ر.س</span>
                </div>
              </div>
              <div className="flex flex-col gap-5 p-10 text-center grow">
                <p className="text-[0.75rem] font-medium">عدد السومات</p>
                <div className="flex gap-1 text-[#171D5B] text-[1.625rem] font-bold">
                  <p>{asset.bidsCount}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F9F9F9] flex flex-col rounded-2xl py-4">
            <div className="py-2 flex justify-around">
              <div className="bg-white text-white w-[15.81rem] h-18 rounded-lg py-6 px-16 flex gap-10 justify-center items-center shadow-lg">
                <button
                  onClick={() => setCount((prev: number) => prev + 1000)}
                  className="text-[#171D5B] text-[3rem] cursor-pointer active:scale-80 transition"
                >
                  +
                </button>

                <p className="text-[#EEA820] text-[1.625rem] font-bold">
                  {count}
                </p>

                <button
                  onClick={() =>
                    count <= asset.deposit
                      ? null
                      : setCount((prev: number) => prev - 1000)
                  }
                  className="text-[#171D5B] text-[3.5rem] cursor-pointer active:scale-80 transition"
                >
                  -
                </button>
              </div>

              <button className="bg-[#171D5B] text-white rounded-lg py-6 px-16 flex gap-1 cursor-pointer hover:bg-[#171D5B] transition duration-250">
                <GavelIcon />
                <p>اضف سومتك</p>
              </button>
            </div>
            <hr className="border border-[#EAECF0A8]/66 w-[95%] mx-auto my-3 border-dashed" />
            <div className="py-10 px-10">
              <li>
                <p>
                  بالضغط على زر أضف سومتك ,فانك توافق على الشروط وأحكام المزاد .
                </p>
              </li>
              <li>
                {" "}
                <p>
                  السعر الإجمالي لا يشمل ضريبة التصرفات العقارية ويتحملها
                  المشترى .
                </p>
              </li>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white shadow-2xl grow min-w-[45%] rounded-2xl">
          <div className="flex items-center py-11 px-11 text-[1.25rem]">
            <p className="font-medium">اعلي المزايدين</p>
            <span className="text-[#DC5224] font-bold">(3)</span>
          </div>
          <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default w-full border-[#EAECF0]">
            <table className="w-full text-sm text-left rtl:text-right text-body ">
              <thead className="text-sm text-body text-[#667085] bg-[#F2F3F4] border-b border-[#EAECF0] rounded-base border-default">
                <tr>
                  <th scope="col" className="px-6 py-3 font-medium">
                    الاسم
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    سعر السوم
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    الوقت
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-[#EAECF0] text-[1rem]">
                  <th
                    scope="row"
                    className="px-6 py-10 font-medium  whitespace-nowrap"
                  >
                    اسلام محمد عبد الرحمن
                  </th>
                  <td className="pr-3 pl-1 py-4">34.239.20 ر.س</td>
                  <td className="pr-3 pl-1 py-4">منذ 12 يوماً</td>
                </tr>
                <tr className="border border-[#EAECF0] text-[1rem]">
                  <th
                    scope="row"
                    className="px-6 py-10 font-medium  whitespace-nowrap"
                  >
                    اسلام محمد عبد الرحمن
                  </th>
                  <td className="pr-3 pl-1 py-4">34.239.20 ر.س</td>
                  <td className="pr-3 pl-1 py-4">منذ 12 يوماً</td>
                </tr>
                <tr className="border border-[#EAECF0] text-[1rem]">
                  <th
                    scope="row"
                    className="px-6 py-10 font-medium  whitespace-nowrap"
                  >
                    اسلام محمد عبد الرحمن
                  </th>
                  <td className="pr-3 pl-1 py-4">34.239.20 ر.س</td>
                  <td className="pr-3 pl-1 py-4">منذ 12 يوماً</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col px-5">
            <div className="py-9">
              <p className="primary-label font-bold text-[1.125rem]">
                التفاصيل
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex  gap-5">
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-center gap-3 w-full">
                    <p className="">نوع الصفقة</p>
                    <div className="bg-[#FAFAFA] border border-[#EAECF0] px-10 py-3 rounded-lg w-50 h-12">
                      <p>للبيع</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-center gap-3 w-full">
                    <p className="">الموقع</p>
                    <div className="bg-[#FAFAFA] border border-[#EAECF0] px-10 py-3 rounded-lg w-50 h-12">
                      <p className="text-[0.8rem] text-nowrap">
                        {asset.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  gap-5">
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-center gap-3 w-full">
                    <p className="">سعر المتر</p>
                    <div className="bg-[#FAFAFA] border border-[#EAECF0] px-10 py-3 rounded-lg w-50 h-12">
                      <p>{pricePerMeter}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-center gap-3 w-full">
                    <p className="">الاجمالي</p>
                    <div className="bg-[#FAFAFA] border border-[#EAECF0] px-10 py-3 rounded-lg w-50 h-12">
                      <p className="text-[1rem] text-nowrap">
                        {total}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  gap-5">
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-center gap-3 w-full">
                    <p className="">ضريبة السعي</p>
                    <div className="bg-[#FAFAFA] border border-[#EAECF0] px-10 py-3 rounded-lg w-50 h-12">
                      <p>{tax}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-center gap-3 w-full">
                    <p className="">السعي</p>
                    <div className="bg-[#FAFAFA] border border-[#EAECF0] px-10 py-3 rounded-lg w-50 h-12">
                      <p className="text-[1rem] text-nowrap">
                        {fee}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  gap-5">
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-center gap-3 w-full">
                    <p className="">مساحة العقار</p>
                    <div className="bg-[#FAFAFA] border border-[#EAECF0] px-10 py-3 rounded-lg w-50 h-12 flex gap-1">
                      <p>{asset.space}</p>
                      <p>م²</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-center gap-3 w-full">
                    <p className="">رقم الصك</p>
                    <div className="bg-[#FAFAFA] border border-[#EAECF0] px-10 py-3 rounded-lg w-50 h-12">
                      <p className="text-[1rem] text-nowrap">320 443 543 563</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  gap-5">
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-center gap-3 w-full">
                    <p className="text-[1rem]">هل يوجد جراج</p>
                    <div className="bg-[#FAFAFA] border border-[#EAECF0] px-10 py-3 rounded-lg w-50 h-12 flex gap-1">
                      <p>لا يوجد</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col grow">
                  <div className="flex justify-between items-center gap-3 w-full">
                    <p className="text-[1rem]">هل يوجد مكيف</p>
                    <div className="bg-[#FAFAFA] border border-[#EAECF0] px-10 py-3 rounded-lg w-50 h-12">
                      <p className="text-[1rem] text-nowrap">لا يوجد</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
