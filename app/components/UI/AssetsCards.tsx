import { MapPin, RulerDimensionLine } from "lucide-react";
import Image from "next/image";
import Countdown from "../CountDown";
import { AssetsProps } from "../../types/auctions";
import { useState } from "react";
import Link from "next/link";
import { Assets } from "@/app/data/assets";
import { Grid } from "@mui/material";

export default function AssetsCards({
  startIndex,
  endIndex,
  auctionId,
}: AssetsProps) {
  const [closedAssets, setClosedAssets] = useState<Record<string, boolean>>({});

  const handleSetClosed = (assetId: string, value: boolean) => {
    setClosedAssets((prev) => ({ ...prev, [assetId]: value }));
  };

  return (
    <>
      {Assets.slice(startIndex, endIndex).map((asset) => {
        const isClosed = closedAssets[asset._id] || false;

        return (
          <Grid key={asset._id} size={{ xs: 12, lg: 6 }}>
            <div className="w-full h-full py-4 pl-6 pr-2 rounded-xl shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-1.5 md:gap-2 bg-white">
              <div className="relative w-full md:w-[40%] shrink-0">
                <Image
                  className="rounded-xl object-cover w-full h-55 md:h-full"
                  src={isClosed ? "/auctions-imgs/closed.png" : asset.image}
                  width={500}
                  height={500}
                  alt="auction"
                />
                <div className="absolute bottom-0 right-0 w-full h-7 bg-gray-600/20 backdrop-blur-md flex justify-center items-center px-3 rounded-b-lg">
                  <MapPin color="white" className="ml-1" />
                  <span className="text-white text-sm font-medium truncate">
                    {asset.location}
                  </span>
                </div>
              </div>

              {/* المحتوى */}
              <div className="flex flex-col justify-between w-full md:w-[60%] gap-3 md:gap-4 p-2">
                <div className="flex flex-col gap-2 md:gap-3">
                  <h6 className="text-md font-semibold text-[#171D5B] truncate">
                    {asset.name}
                  </h6>

                  <div className="flex flex-wrap gap-4 md:gap-6 items-center">
                    <div className="flex gap-2 items-center">
                      <RulerDimensionLine color="#EEA820" size={20} />
                      <p className="text-[12px]">{asset.space}م²</p>
                    </div>

                    <div className="flex gap-1 items-center">
                      <p className="text-base text-[#EEA820] font-bold">
                        {asset.bidPrice.toLocaleString("EG")}
                      </p>
                      <span className="text-[#171D5B] font-light">ر.س</span>
                    </div>
                  </div>

                  <div className="flex justify-start mt-2">
                    <Countdown
                      startDate={asset.startDate}
                      endDate={asset.endDate}
                      setClosed={(value: boolean) =>
                        handleSetClosed(asset._id, value)
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-4 mt-3">
                  {isClosed ? (
                    <div>
                      <p className="text-[0.8rem] text-[#171D5B] font-bold">
                        سعر السوم الحالي
                      </p>
                      <div className="flex gap-1 items-center">
                        <span className="text-[#EEA820] text-[0.9rem]">
                          500,000,000
                        </span>
                        <span className="text-[#171D5B] text-[0.9rem]">
                          ر.س
                        </span>
                      </div>
                      <span className="text-gray-400 text-[0.8rem]">
                        (20 ر.س للمتر)
                      </span>
                    </div>
                  ) : (
                    <div>
                      <p className="text-[0.9rem] text-[#171D5B] text-nowrap">
                        عدد السومات
                      </p>
                      <span className="text-[#EEA820] text-[1.2rem]">
                        {asset.bidsCount}
                      </span>
                    </div>
                  )}

                  <Link href={`/auctions/${auctionId}/assets/${asset._id}`}>
                    <button className="bg-[#EEA820] text-white rounded-md text-[0.81rem] w-40 h-12 hover:bg-[#d99518] transition cursor-pointer">
                      تفاصيل المزاد
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        );
      })}
    </>
  );
}
