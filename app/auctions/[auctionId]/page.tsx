"use client";
import { Container, Grid, Pagination } from "@mui/material";
import { Assets } from "@/app/data/assets";
import { useState } from "react";
import GavelIcon from "@mui/icons-material/Gavel";
import Image from "next/image";
import { auctions } from "@/app/data/auctions";
import AssetsTable from "@/app/components/sections/auctionDetails/Table";
import AssetsCards from "@/app/components/UI/AssetsCards";
import { useParams } from "next/navigation";
import { assetTypes } from "@/app/types/auctions";

export default function AuctionDetailsPage() {
  const params = useParams();
  const auctionId = params.auctionId as string;
  const auction = auctions.find((a) => a._id === auctionId);

  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [showMode, setShowMode] = useState("table");
  const [page, setPage] = useState(1);
  const AuctionAssets: assetTypes[] | undefined = Assets.filter(
    (a) => a.auctionId === auctionId,
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(AuctionAssets.length / itemsPerPage);

  if (!auction) {
    return (
      <Container maxWidth="xl" sx={{ py: 10, textAlign: "center" }}>
        <p className="text-2xl text-gray-500">المزاد غير موجود</p>
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
      <div className="flex justify-center lg:justify-start w-full">
        <p className="primary-label text-[2.5rem] font-bold">المزادات</p>
      </div>

      <div className="bg-[#F3F4F6] w-screen py-1 lg:py-8 mt-2">
        <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-1 lg:gap-8">
            <div>
              <div className="flex gap-1 text-xl sm:text-2xl md:text-3xl text-[#171D5B] mb-4">
                <span>مزاد</span>
                <p>{auction.name}</p>
              </div>
              <div className="flex gap-2 items-center text-base sm:text-lg md:text-xl">
                <GavelIcon sx={{ color: "#EEA820" }} />
                <p className="text-[#171D5B]">عدد الاصول</p>
                <span className="text-[#DC5224]">({Assets.length})</span>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              {auction.image && (
                <div className="relative w-24 sm:w-28 md:w-32 h-16 sm:h-20">
                  <Image
                    src={auction.image}
                    alt="auction logo"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
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

      <div className="hidden lg:flex gap-3 py-5 w-full lg:justify-start">
        <button
          onClick={() => {
            setShowMode("table");
            setItemsPerPage(12);
          }}
          className={`px-6 h-11 rounded-lg border transition font-medium cursor-pointer
            ${
              showMode === "table"
                ? "bg-[#171D5B] text-white border-[#171D5B]"
                : "bg-white text-[#667085] border-[#D0D5DD] hover:bg-gray-50"
            }`}
        >
          جدول
        </button>
        <button
          onClick={() => setShowMode("cards")}
          className={`px-6 h-11 rounded-lg border transition font-medium cursor-pointer
            ${
              showMode === "cards"
                ? "bg-[#171D5B] text-white border-[#171D5B]"
                : "bg-white text-[#667085] border-[#D0D5DD] hover:bg-gray-50"
            }`}
        >
          بطاقات
        </button>
      </div>

      <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
        <Grid container spacing={2}>
          {Assets.length === 0 ? (
            <Grid
              size={12}
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                marginTop: "5rem",
                color: "gray",
                padding: "2rem",
              }}
            >
              <p>لا يوجد اصول</p>
            </Grid>
          ) : showMode === "table" ? (
            <AssetsTable
              startIndex={startIndex}
              endIndex={endIndex}
              auctionId={auctionId}
              AuctionAssets={AuctionAssets}
            />
          ) : (
            <AssetsCards
              startIndex={startIndex}
              endIndex={endIndex}
              auctionId={auctionId}
              AuctionAssets={AuctionAssets}

            />
          )}
        </Grid>
      </Container>

      <div className="mt-20">
        <Pagination
          count={totalPages}
          page={page}
          onChange={(event, value) => {
            setPage(value);
            window.scrollTo({ top: 200, behavior: "smooth" });
          }}
          shape="rounded"
          dir="ltr"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#667085",
              "&:hover": { backgroundColor: "#eee" },
            },
            "& .Mui-selected": {
              backgroundColor: "rgba(238, 168, 32, 0.08)",
              color: "#EEA820",
              "&:hover": { backgroundColor: "rgba(238, 169, 32, 0.13)" },
            },
          }}
        />
      </div>
    </Container>
  );
}
