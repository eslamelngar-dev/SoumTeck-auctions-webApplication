import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import Countdown from "@/app/components/CountDown";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@mui/material";
import { Assets } from "@/app/data/assets";

type AssetsTableProps = {
  startIndex: number;
  endIndex: number;
};
export default function AssetsTable({
  startIndex,
  endIndex,
}: AssetsTableProps) {
  const [clicked, setClicked] = useState(false);
  function handleButtonClick() {
    setClicked((prev) => !prev);
  }
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default w-full border-[#EAECF0]">
      <table className="w-full text-sm text-left rtl:text-right text-body ">
        <thead className="text-sm text-body text-[#667085] bg-[#F2F3F4] border-b border-[#EAECF0] rounded-base border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              انضم للمزاد
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              اسم العقار
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              سعر السوم الحالي
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              مساحة
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              عربون الدخول
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              عدد السومات
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              المؤقت
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              تفاصيل المزاد
            </th>
          </tr>
        </thead>
        <tbody>
          {Assets.slice(startIndex, endIndex).map((asset) => (
            
              <tr key={asset._id} className="border border-[#EAECF0]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  <Button
                    variant="contained"
                    onClick={handleButtonClick}
                    sx={
                      clicked
                        ? {
                            gap: 0.8,
                            backgroundColor: "#5fcc00",
                            fontWeight: 800,
                          }
                        : {
                            gap: 0.8,
                            backgroundColor: "#171D5B",
                            fontWeight: 800,
                          }
                    }
                    startIcon={
                      clicked ? (
                        <CheckIcon sx={{ ml: 0.5, mr: -0.5 }} />
                      ) : (
                        <AddIcon sx={{ ml: 0.5, mr: -0.5 }} />
                      )
                    }
                  >
                    سجل في المزاد
                  </Button>
                </th>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <div className=" relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={asset.image}
                        alt={asset.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="text-nowrap">{asset.name}</p>
                      <span className="text-[#4B5563] text-xs">
                        {asset.location}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 gap-1 flex flex-col justify-center items-center">
                  <div>
                    <p className="text-[#DC5224] font-bold">
                      {asset.bidPrice}ر.س
                    </p>
                    <p>(300 ر.س) للمتر </p>
                  </div>
                </td>
                <td className="px-6 py-4  ">
                  <div className="flex justify-center items-center gap-1">
                    <p className="font-bold">{asset.space}</p>
                    <span>م²</span>
                  </div>
                </td>
                <td className="px-6 py-4 ">
                  <div className="flex justify-center items-center gap-1">
                    <p className="font-bold">{asset.deposit}</p>
                    <span>ر.س</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1 justify-center items-center">
                    <p className="font-bold">({asset.bidsCount})</p>
                    <span>مزايد</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Countdown
                    startDate={asset.startDate}
                    endDate={asset.endDate}
                    setClosed={() => false}
                  />
                </td>
                <td className="px-6 py-4">
                  <Link href={`/auctions/details/${asset._id}`}>
                    <button className="bg-[#EEA820] text-white rounded-md text-[0.81rem] w-40 h-12 cursor-pointer hover:bg-[#d99518] transition">
                      تفاصيل المزاد
                    </button>
                  </Link>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
