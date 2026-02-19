import { Assets } from "@/app/data/assets";
import { assetTypes } from "@/app/types/auctions";
import { Container } from "@mui/material";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface props {
  params:{
    id:string
  }
}
export default function AuctionDetails({params}:props) {
  const assetId = params.id

  const asset = Assets.find((a) => a._id === assetId) as assetTypes | undefined;

  if (!asset) {
    return <div>Not Found</div>;
  }
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          px: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className=" w-screen py-1 lg:py-8 ">
          <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-1 lg:gap-8">
              <div>
                <Link href="/">الرئيسية</Link>
                <ChevronLeft />
                <Link href="/auctions">المزادات</Link>
                <ChevronLeft />
                <Link href="#">{asset.name}</Link>
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
      </Container>
    </>
  );
}
