// app/auctions/[auctionId]/assets/[assetId]/page.tsx

import { Assets } from "@/app/data/assets";
import { auctions } from "@/app/data/auctions";
import { Container } from "@mui/material";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{
    auctionId: string;
    assetId: string;
  }>;
}

export default async function AssetDetailsPage({ params }: Props) {
  const { auctionId, assetId } = await params;

  const auction = auctions.find((a) => a._id === auctionId);
  const asset = Assets.find((a) => a._id === assetId);

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

  return (
    <Container
      maxWidth="xl"
      sx={{
        px: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="py-4 mt-10"
    >
      <div className="w-screen py-1 lg:py-8">
        <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4 lg:gap-8">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-[#667085] hover:text-[#EEA820]">
                الرئيسية
              </Link>
              <ChevronLeft size={16} className="text-gray-400" />
              <Link href="/auctions" className="text-[#667085] hover:text-[#EEA820]">
                المزادات
              </Link>
              <ChevronLeft size={16} className="text-gray-400" />
              <Link
                href={`/auctions/${auctionId}`}
                className="text-[#667085] hover:text-[#EEA820]"
              >
                {auction.name}
              </Link>
              <ChevronLeft size={16} className="text-gray-400" />
              <span className="text-[#EEA820] font-medium">{asset.name}</span>
            </div>

            {/* Logos */}
            <div className="flex gap-6 items-center">
              <div className="relative w-24 sm:w-28 md:w-32 h-16 sm:h-20">
                <Image
                  src="/Companys-logos/auctions-companys.png"
                  alt="auction logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 sm:w-28 md:w-32 h-16 sm:h-20">
                <Image
                  src="/Companys-logos/infath-logo.png"
                  alt="company logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Asset Details Content */}
      <div className="w-full mt-8">
        <h1 className="text-3xl font-bold text-[#171D5B]">{asset.name}</h1>
        <p className="text-gray-600 mt-2">{asset.location}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Asset Image */}
          <div className="relative w-full h-80 rounded-xl overflow-hidden">
            <Image
              src={asset.image}
              alt={asset.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Asset Info */}
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">المساحة</span>
              <span className="font-bold">{asset.space} م²</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">سعر السوم الحالي</span>
              <span className="font-bold text-[#DC5224]">{asset.bidPrice} ر.س</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">عربون الدخول</span>
              <span className="font-bold">{asset.deposit} ر.س</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-600">عدد المزايدين</span>
              <span className="font-bold">{asset.bidsCount}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}