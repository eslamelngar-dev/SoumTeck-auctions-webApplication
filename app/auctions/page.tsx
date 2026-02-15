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
          px: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="py-4 mt-10"
      >
        <div className="flex justify w-full">
          <p className=" primary-label text-[2.5rem] font-bold">المزادات</p>
        </div>
        <div className="bg-[#F3F4F6] flex w-screen justify-between py-5 mt-2">
          <div className="px-[4.81rem]">
            <p className="text-[#171D5B]  text-[1.87rem]">كل المزادات</p>
            <div className="flex gap-1 text-[1.53rem]">
              <GavelIcon sx={{ color: "#EEA820" }} />
              <p className="text-[#171D5B] text-[1.53rem]">عدد المزادات </p>
              <p className="text-[#171D5B] text-[1.53rem]">
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
          <div className="flex px-[4.81rem]">
            <div className="relative w-[40%] sm:w-[45%] lg:w-62 h-12 sm:h-16 lg:h-22">
              <Image
                src={companys}
                alt="overlay1 hero img"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 w-full flex justify-center">
          <ToggleGroup
            one="القائمة"
            two="القادمة"
            three="المنتهي"
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {filteredAuctions.length === 0 ? (
              <Grid 
                  size={12}
                  sx={{
                    textAlign:"center",
                    display: "flex",
                    justifyContent: "center",
                    marginTop:"5rem",
                    color:"gray",
                    padding:"2rem"
                  }}
                >
                <p>لا يوجد مزادات {" "}</p>
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
