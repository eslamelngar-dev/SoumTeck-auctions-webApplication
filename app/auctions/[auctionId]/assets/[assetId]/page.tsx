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
import DetailItem from "@/app/components/UI/DetailItem";

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
        px: { xs: 1, sm: 2, md: 4 },
        pb: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ===== Breadcrumb ===== */}
      <div className="w-full max-w-350 mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4 lg:gap-8 py-4">
          <div className="flex items-center flex-wrap gap-1 text-xs sm:text-sm">
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
            <div className="relative w-32 h-12 sm:w-40 sm:h-15 md:w-60 md:h-20">
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

      {/* ===== Main Content ===== */}
      <div className="flex flex-col xl:flex-row gap-4 w-full">
        {/* ===== Left Column - Auction Details ===== */}
        <div className="flex flex-col shadow-2xl rounded-2xl w-full xl:w-[55%]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between gap-3 py-6 sm:py-10 px-3 sm:px-4">
            <div className="flex flex-wrap items-baseline gap-1">
              <p className="font-bold text-lg sm:text-[1.5rem]">{asset.name}</p>
              <p className="text-[#6C6C6C] text-[0.75rem] sm:text-[0.8rem]">
                ({asset.location})
              </p>
            </div>
            <div className="self-start sm:self-center">
              <p className="bg-[#57B73C] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs sm:text-sm whitespace-nowrap">
                انت اعلي مزايد
              </p>
            </div>
          </div>

          <hr className="border border-[#EAECF0A8]/66" />

          {/* Gallery Header */}
          <div className="flex flex-col sm:flex-row justify-between gap-2 py-5 sm:py-9 px-3 sm:px-4">
            <p className="font-bold text-base sm:text-[1.125rem]">معرض الصور</p>
            <p className="font-bold text-sm sm:text-[1.125rem]">
              رقم التواصل: +966501759844
            </p>
          </div>

          {/* Main Image */}
          <div className="relative w-[95%] h-48 sm:h-72 md:h-96 lg:h-120 rounded-2xl mx-auto">
            <Image
              src={asset.image}
              alt={asset.name}
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Countdown */}
          <div className="px-3 sm:px-5 py-4 sm:py-5">
            <Countdown
              startDate={asset.startDate}
              endDate={asset.endDate}
              setClosed={() => false}
            />
          </div>

          <hr className="border border-[#EAECF0A8]/66 w-[95%] mx-auto" />

          {/* Price Section */}
          <div className="flex flex-col md:flex-row justify-between px-4 sm:px-6 md:px-10 py-5 sm:py-8 gap-6">
            <div className="flex flex-col gap-3 px-2">
              <p className="text-[#171D5B] text-lg sm:text-[1.5rem] font-medium">
                سعر السوم الحالي
              </p>
              <div className="flex text-[#EEA820] font-bold text-xl sm:text-[1.62rem] gap-2">
                <p>{asset.bidPrice.toLocaleString()}</p>
                <span className="text-lg sm:text-[1.4rem]">ر.س</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 grow px-2 max-w-md">
              <div className="flex justify-between">
                <p className="text-[#667085]">سعر المتر</p>
                <div className="flex gap-1">
                  <p className="text-[#171D5B] font-medium">
                    {pricePerMeter.toLocaleString()}
                  </p>
                  <span>ريال</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-[#667085]">الأجمالي</p>
                <div className="flex gap-1">
                  <p className="text-[#171D5B] font-medium">
                    {total.toLocaleString()}
                  </p>
                  <span>ريال</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-[#667085]">ضريبة السعي</p>
                <div className="flex gap-1">
                  <p className="text-[#171D5B] font-medium">
                    {tax.toLocaleString()}
                  </p>
                  <span>ريال</span>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-[#667085]">السعي</p>
                <div className="flex gap-1">
                  <p className="text-[#171D5B] font-medium">
                    {fee.toLocaleString()}
                  </p>
                  <span>ريال</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border border-[#EAECF0A8]/66 w-[95%] mx-auto" />

          {/* Deposit / Bid Info */}
          <div className="border border-[#EAECF0A8]/66 w-full">
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col gap-3 sm:gap-5 p-5 sm:p-10 text-center grow">
                <p className="text-[0.75rem] font-medium">عربون الدخول</p>
                <div className="flex gap-1 justify-center text-[#171D5B] text-lg sm:text-[1.625rem] font-bold">
                  <p>{asset.deposit.toLocaleString()}</p>
                  <span>ر.س</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-5 p-5 sm:p-10 text-center grow">
                <p className="text-[0.75rem] font-medium">فرق السوم</p>
                <div className="flex gap-1 justify-center text-[#171D5B] text-lg sm:text-[1.625rem] font-bold">
                  <p>1,000</p>
                  <span>ر.س</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-5 p-5 sm:p-10 text-center grow">
                <p className="text-[0.75rem] font-medium">عدد السومات</p>
                <div className="flex gap-1 justify-center text-[#171D5B] text-lg sm:text-[1.625rem] font-bold">
                  <p>{asset.bidsCount}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bid Controls */}
          <div className="bg-[#F9F9F9] flex flex-col rounded-2xl py-4">
            <div className="py-2 flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-4 px-3">
              {/* Counter */}
              <div className="bg-white w-full sm:w-auto min-w-50 max-w-75 h-14 sm:h-18 rounded-lg py-3 sm:py-6 px-4 sm:px-8 flex gap-4 sm:gap-10 justify-center items-center shadow-lg">
                <button
                  onClick={() => setCount((prev: number) => prev + 1000)}
                  className="text-[#171D5B] text-2xl sm:text-[3rem] cursor-pointer active:scale-80 transition"
                >
                  +
                </button>
                <p className="text-[#EEA820] text-lg sm:text-[1.625rem] font-bold">
                  {count.toLocaleString()}
                </p>
                <button
                  onClick={() =>
                    count <= asset.deposit
                      ? null
                      : setCount((prev: number) => prev - 1000)
                  }
                  className="text-[#171D5B] text-3xl sm:text-[3.5rem] cursor-pointer active:scale-80 transition"
                >
                  -
                </button>
              </div>

              {/* Bid Button */}
              <button className="bg-[#171D5B] text-white rounded-lg py-3 sm:py-6 px-8 sm:px-16 flex gap-1 items-center cursor-pointer hover:bg-[#1a2068] transition duration-250 w-full sm:w-auto justify-center">
                <GavelIcon fontSize="small" />
                <p className="text-sm sm:text-base">اضف سومتك</p>
              </button>
            </div>

            <hr className="border border-[#EAECF0A8]/66 w-[95%] mx-auto my-3 border-dashed" />

            <div className="py-5 sm:py-10 px-4 sm:px-10 text-sm sm:text-base">
              <li>
                <p>
                  بالضغط على زر أضف سومتك ,فانك توافق على الشروط وأحكام المزاد .
                </p>
              </li>
              <li>
                <p>
                  السعر الإجمالي لا يشمل ضريبة التصرفات العقارية ويتحملها
                  المشترى .
                </p>
              </li>
            </div>
          </div>
        </div>

        {/* ===== Right Column - Top Bidders & Details ===== */}
        <div className="flex flex-col bg-white shadow-2xl w-full xl:w-[45%] rounded-2xl">
          {/* Top Bidders Header */}
          <div className="flex items-center py-6 sm:py-11 px-5 sm:px-11 text-base sm:text-[1.25rem]">
            <p className="font-medium">اعلي المزايدين</p>
            <span className="text-[#DC5224] font-bold">(3)</span>
          </div>

          {/* Table */}
          <div className="relative overflow-x-auto shadow-xs rounded-base border border-[#EAECF0] w-full">
            <table className="w-full text-xs sm:text-sm text-left rtl:text-right">
              <thead className="text-xs sm:text-sm text-[#667085] bg-[#F2F3F4] border-b border-[#EAECF0]">
                <tr>
                  <th scope="col" className="px-3 sm:px-6 py-3 font-medium">
                    الاسم
                  </th>
                  <th scope="col" className="px-3 sm:px-6 py-3 font-medium">
                    سعر السوم
                  </th>
                  <th scope="col" className="px-3 sm:px-6 py-3 font-medium">
                    الوقت
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((_, i) => (
                  <tr
                    key={i}
                    className="border border-[#EAECF0] text-xs sm:text-[1rem]"
                  >
                    <th
                      scope="row"
                      className="px-3 sm:px-6 py-5 sm:py-10 font-medium whitespace-nowrap"
                    >
                      اسلام محمد عبد الرحمن
                    </th>
                    <td className="px-3 sm:pr-3 sm:pl-1 py-4">34.239.20 ر.س</td>
                    <td className="px-3 sm:pr-3 sm:pl-1 py-4">منذ 12 يوماً</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Details Section */}
          <div className="flex flex-col px-3 sm:px-5">
            <div className="py-6 sm:py-9">
              <p className="font-bold text-base sm:text-[1.125rem]">التفاصيل</p>
            </div>

            <div className="flex flex-col gap-5 sm:gap-10 pb-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <DetailItem label="نوع الصفقة" value="للبيع" />
                <DetailItem label="الموقع" value={asset.location} small />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <DetailItem
                  label="سعر المتر"
                  value={pricePerMeter.toString()}
                />
                <DetailItem label="الاجمالي" value={total.toString()} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <DetailItem label="ضريبة السعي" value={tax.toString()} />
                <DetailItem label="السعي" value={fee.toString()} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <DetailItem label="مساحة العقار" value={`${asset.space} م²`} />
                <DetailItem label="رقم الصك" value="320 443 543 563" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <DetailItem label=" يوجد جراج؟" value="لا يوجد" />
                <DetailItem label=" يوجد مكيف؟" value="لا يوجد" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
