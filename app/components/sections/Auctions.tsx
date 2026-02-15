"use client";
import { Container, Grid } from "@mui/material";
import ToggleGroup from "../UI/ToggleGroup";
import AuctionCard from "../UI/AuctionCard";
import { auctions } from "@/app/data/auctions";
import { useState } from "react";
import { AuctionStatus, filterAuctions } from "@/app/utils/auctionHelpers";
import Link from "next/link";

export default function Auctions() {
  const [activeTab, setActiveTab] = useState<AuctionStatus>("active");

  const filteredAuctions = filterAuctions({
    auctions: auctions,
    status: activeTab,
  });

  const handleTabChange = (tab: AuctionStatus) => {
    setActiveTab(tab);
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
        className="py-4 mt-[2.5rem]"
      >
        <div className="flex justify-start w-[90%]">
          <p className=" primary-label text-[2.5rem]">المزادات</p>
        </div>

        <div className="mt-[2rem] w-full flex justify-center">
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
            {filteredAuctions.slice(0, 8).map((auction) => (
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
            ))}
          </Grid>
        </Container>
        <div className="mt-[2.8rem]">
          <Link href="/auctions">
            <button className="py-4 px-15 rounded-full bg-white hover:bg-[#EEA820] hover:text-white text-[#EEA820] border border-[#EEA820] transition cursor-pointer">
              كل المزادات
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
}
