import { MapPin, RulerDimensionLine } from "lucide-react";
import Image from "next/image";
import Countdown from "../CountDown";
import { AuctionCardProps } from "../../types/auctions";
import { useState } from "react";

export default function AuctionCard({
  name,
  image,
  location,
  street,
  logo,
  startDate,
  endDate,
  assetsCount,
}: AuctionCardProps) {
  const [closed, setClosed] = useState(false);

  return (
    <>
      <div className="mt-[1.25rem] bg-neutral-primary-soft block w-[20.18rem] h-[28rem] p-3 rounded-xl shadow-2xl border border-gray-100">
        <a href="#" className="relative flex justify-center">
          <Image
            className={`rounded-xl cursor-default`}
            src={closed ? "/auctions-imgs/closed.png" : image}
            width={500}
            height={500}
            alt="auction"
            style={{minHeight:210}}
          />
          <div
            className="
            absolute
            bottom-0 right-0 w-full h-[1.87rem] 
            bg-grey/20 backdrop-blur-md 
            flex items-center px-4
          "
          >
            <MapPin color="white" className="ml-1 mr-[-10]" />
            <span className="text-white text-sm font-medium">
              {location} - {street}
            </span>
          </div>
        </a>
        <div className="flex justify-between mt-4">
          <a href="#">
            <h6 className=" mb-2 text-md font-semibold tracking-tight text-heading text-[#171D5B]">
              {name}
            </h6>
          </a>
          <Image
            className={` relative rounded-xl`}
            src={logo}
            width={101}
            height={35}
            alt="logo1"
          />
        </div>
        <div className="flex gap-2">
          <RulerDimensionLine color="#EEA820" size={20} />
          <p className="mb-6 text-[12px]">{"325.22م²"}</p>
        </div>
        <div className="flex justify-center">
          <Countdown
            endDate={endDate}
            startDate={startDate}
            setClosed={setClosed}
          />
        </div>

        <div className="mt-[0.8rem] flex justify-between">
          {closed ? (
            <div>
              <p className="text-[0.8rem] text-[#171D5B] font-bold">سعر السوم الحالي</p>
              <div>
                <span className="text-[#EEA820] text-[0.9rem]">
                  500,000,000{" "}
                </span>
                <span className="text-[#171D5B] text-[0.9rem]">ر.س </span>
              </div>
              <span className="text-gray-400 text-[0.8rem]">
                (20 ر.س للمتر)
              </span>
            </div>
          ) : (
            <div>
              <p className="text-[1.1rem] text-[#171D5B]">عدد الاصول</p>
              <span className="text-[#EEA820] text-[1.2rem]">
                {assetsCount}
              </span>
            </div>
          )}

          <button className="bg-[#EEA820] text-white rounded-md text-[0.81rem] w-[10rem] h-[3rem] cursor-pointer hover:bg-[#d99518] transition">
            تفاصيل المزاد
          </button>
        </div>
      </div>
    </>
  );
}
