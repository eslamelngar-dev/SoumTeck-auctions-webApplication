"use client";
import { Container, Grid, Pagination } from "@mui/material";
import { auctions } from "@/app/data/auctions";
import { useState } from "react";
import { AuctionStatus, filterAuctions } from "@/app/utils/auctionHelpers";
import ToggleGroup from "../components/UI/ToggleGroup";
import AuctionCard from "../components/UI/AuctionCard";
import GavelIcon from "@mui/icons-material/Gavel";
import Image from "next/image";
import companys from "../../public/Companys-logos/auctions-companys.png";

export default function AuctionsPage() {
  const [activeTab, setActiveTab] = useState<AuctionStatus>("active");
  const [page, setPage] = useState(1);

  const filteredAuctions = filterAuctions({
    auctions: auctions,
    status: activeTab,
  });

  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(filteredAuctions.length / itemsPerPage);

  const handleTabChange = (tab: AuctionStatus) => {
    setActiveTab(tab);
    setPage(1);
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="py-4 mt-4 sm:mt-6 md:mt-10"
      >
        {/* العنوان */}
        <div className="flex w-full">
          <p className="primary-label text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold">
            المزادات
          </p>
        </div>

        {/* البانر */}
        <div className="bg-[#F3F4F6] flex flex-col sm:flex-row w-full justify-between items-center py-4 sm:py-5 mt-2 px-4 sm:px-8 md:px-12 lg:px-[4.81rem] gap-4 sm:gap-0 rounded-lg">
          <div>
            <p className="text-[#171D5B] text-[1.2rem] sm:text-[1.5rem] md:text-[1.87rem] text-center sm:text-right">
              كل المزادات
            </p>
            <div className="flex gap-1 items-center justify-center sm:justify-start text-[1rem] sm:text-[1.2rem] md:text-[1.53rem]">
              <GavelIcon
                sx={{ color: "#EEA820", fontSize: { xs: 20, md: 28 } }}
              />
              <p className="text-[#171D5B]">عدد المزادات </p>
              <p className="text-[#171D5B]">
                {activeTab === "active"
                  ? "القائمة"
                  : activeTab === "upcoming"
                    ? "القادمة"
                    : "المنتهية"}
              </p>
              <span className="text-[#DC5224]">
                ({filteredAuctions.length})
              </span>
            </div>
          </div>
          <div className="flex justify-center sm:justify-end">
            <div className="relative w-32 h-10 sm:w-44 sm:h-14 md:w-52 md:h-16 lg:w-62 lg:h-22">
              <Image
                src={companys}
                alt="overlay1 hero img"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* التبويبات */}
        <div className="mt-4 sm:mt-6 md:mt-8 w-full flex justify-center">
          <ToggleGroup
            one="القائمة"
            two="القادمة"
            three="المنتهي"
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>

        {/* الكروت */}
        <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 1, md: 2 } }}>
          <Grid container spacing={{ xs: 1, sm: 2 }}>
            {filteredAuctions.length === 0 ? (
              <Grid
                size={12}
                sx={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: { xs: "2rem", md: "5rem" },
                  color: "gray",
                  padding: { xs: "1rem", md: "2rem" },
                }}
              >
                <p>لا يوجد مزادات </p>
                <span className="mx-2">
                  {activeTab === "active"
                    ? "قائمة "
                    : activeTab === "upcoming"
                      ? "قادمة "
                      : " منتهية"}
                </span>
              </Grid>
            ) : (
              filteredAuctions.slice(startIndex, endIndex).map((auction) => (
                <Grid
                  key={auction._id}
                  size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AuctionCard
                    _id={auction._id}
                    name={auction.name}
                    location={auction.location}
                    assetsCount={auction.assetsCount}
                    image={auction.image}
                    street={auction.street}
                    space={auction.space}
                    startDate={auction.startDate}
                    endDate={auction.endDate}
                    logo={auction.logo}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Container>

        {/* الصفحات */}
        <div className="mt-10 sm:mt-14 md:mt-20">
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => {
              setPage(value);
              window.scrollTo({ top: 200, behavior: "smooth" });
            }}
            shape="rounded"
            dir="ltr"
            size="small"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#667085",
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                minWidth: { xs: 28, sm: 32, md: 36 },
                height: { xs: 28, sm: 32, md: 36 },
                "&:hover": {
                  backgroundColor: "#eee",
                },
              },
              "& .Mui-selected": {
                backgroundColor: "rgba(238, 168, 32, 0.08)",
                color: "#EEA820",
                "&:hover": {
                  backgroundColor: "rgba(238, 169, 32, 0.13)",
                },
              },
            }}
          />
        </div>
      </Container>
    </>
  );
}
