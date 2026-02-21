import { MapPin, RulerDimensionLine } from "lucide-react";
import Image from "next/image";
import Countdown from "../CountDown";
import { AssetsProps } from "../../types/auctions";
import { useState } from "react";
import Link from "next/link";
import { Grid } from "@mui/material";

export default function AssetsCards({
  startIndex,
  endIndex,
  auctionId,
  AuctionAssets,
}: AssetsProps) {
  const [closedAssets, setClosedAssets] = useState<Record<string, boolean>>({});
  const handleSetClosed = (assetId: string, value: boolean) => {
    setClosedAssets((prev) => ({ ...prev, [assetId]: value }));
  };

  return (
    <>
      {AuctionAssets?.slice(startIndex, endIndex).map((asset) => {
        const isClosed = closedAssets[asset._id] || false;

        return (
          <Grid key={asset._id} size={{ xs: 12, sm: 6, lg: 6 }}>
            <div className="w-full h-full py-3 sm:py-4 px-2 sm:pl-4 md:pl-6 sm:pr-2 rounded-xl shadow-md sm:shadow-2xl border border-gray-100 flex flex-row sm:flex-col md:flex-row gap-2 sm:gap-3 md:gap-2 bg-white">
              <div className="relative w-[35%] sm:w-full md:w-[40%] shrink-0 min-h-30 sm:min-h-45 md:min-h-0">
                <Image
                  className="rounded-xl object-cover w-full h-full sm:h-48 md:h-full"
                  src={isClosed ? "/auctions-imgs/closed.png" : asset.image}
                  width={500}
                  height={500}
                  alt="auction"
                />
                <div className="absolute bottom-0 right-0 w-full h-6 sm:h-7 bg-gray-600/20 backdrop-blur-md flex justify-center items-center px-2 sm:px-3 rounded-b-xl">
                  <MapPin color="white" className="ml-1" size={14} />
                  <span className="text-white text-[10px] sm:text-sm font-medium truncate">
                    {asset.location}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between w-[65%] sm:w-full md:w-[60%] gap-2 sm:gap-3 md:gap-4 p-1 sm:p-2">
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                  <h6 className="text-sm sm:text-md font-semibold text-[#171D5B] truncate">
                    {asset.name}
                  </h6>

                  <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 items-center">
                    <div className="flex gap-1 sm:gap-2 items-center">
                      <RulerDimensionLine
                        color="#EEA820"
                        size={16}
                        className="sm:w-5 sm:h-5"
                      />
                      <p className="text-[10px] sm:text-[12px]">
                        {asset.space}م²
                      </p>
                    </div>

                    <div className="flex gap-1 items-center">
                      <p className="text-xs sm:text-base text-[#EEA820] font-bold">
                        {asset.bidPrice.toLocaleString("EG")}
                      </p>
                      <span className="text-[#171D5B] font-light text-[10px] sm:text-sm">
                        ر.س
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-start mt-1 sm:mt-2">
                    <Countdown
                      startDate={asset.startDate}
                      endDate={asset.endDate}
                      setClosed={(value: boolean) =>
                        handleSetClosed(asset._id, value)
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-3 md:gap-4 mt-1 sm:mt-3">
                  {isClosed ? (
                    <div>
                      <p className="text-[0.65rem] sm:text-[0.8rem] text-[#171D5B] font-bold">
                        سعر السوم الحالي
                      </p>
                      <div className="flex gap-1 items-center">
                        <span className="text-[#EEA820] text-[0.75rem] sm:text-[0.9rem]">
                          500,000,000
                        </span>
                        <span className="text-[#171D5B] text-[0.75rem] sm:text-[0.9rem]">
                          ر.س
                        </span>
                      </div>
                      <span className="text-gray-400 text-[0.65rem] sm:text-[0.8rem]">
                        (20 ر.س للمتر)
                      </span>
                    </div>
                  ) : (
                    <div>
                      <p className="text-[0.75rem] sm:text-[0.9rem] text-[#171D5B] text-nowrap">
                        عدد السومات
                      </p>
                      <span className="text-[#EEA820] text-[1rem] sm:text-[1.2rem]">
                        {asset.bidsCount}
                      </span>
                    </div>
                  )}

                  <Link href={`/auctions/${auctionId}/assets/${asset._id}`}>
                    <button className="bg-[#EEA820] text-white rounded-md text-[0.7rem] sm:text-[0.81rem] w-28 sm:w-36 md:w-40 h-9 sm:h-10 md:h-12 hover:bg-[#d99518] transition cursor-pointer">
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
