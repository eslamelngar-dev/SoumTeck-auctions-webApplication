"use client";
import { Container, Grid, Pagination } from "@mui/material";
import { Assets } from "@/app/data/assets";
import { useState } from "react";
import GavelIcon from "@mui/icons-material/Gavel";
import Image from "next/image";
import { useParams } from "next/navigation";
import { auctions } from "@/app/data/auctions";
import AssetsTable from "../../components/sections/auctionDetails/Table";

export default function AuctionsPage() {
  const params = useParams();
  const auctionId = params.id;
  const auction = auctions.find((a) => a._id === auctionId);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [page, setPage] = useState(1);
  
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(Assets.length / itemsPerPage);
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
        <div className="bg-[#F3F4F6] flex w-screen justify-between py-10 mt-2">
          <div className="px-[4.81rem]">
            <div className="flex gap-1 text-[1.53rem] text-[#171D5B] mt-auto mb-4">
              <span>مزاد</span>
              <p>{auction?.name}</p>
            </div>
            <div className="flex gap-1 text-[1.53rem]">
              <GavelIcon sx={{ color: "#EEA820" }} />
              <p className="text-[#171D5B] text-[1.53rem]">عدد الاصول </p>

              <span className="text-[#DC5224]">({Assets.length})</span>
            </div>
          </div>
          <div className="flex px-[4.81rem]">
            <div className="relative w-[40%] sm:w-[45%] lg:w-62 h-12 sm:h-16 lg:h-22 flex justify-center items-center gap-3">
              
              <div className="relative w-1/2 h-32">
                {auction?.image && (
                  <Image
                    src={auction.image}
                    alt="overlay1 hero img"
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="relative w-1/2 h-32">
                <Image
                  src="/Companys-logos/infath-logo.png"
                  alt="overlay1 hero img"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 w-full flex justify-center">
          <div className="show-options">

          </div>
        </div>
        <Container maxWidth="xl">
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
                <p>لا يوجداصول </p>
              </Grid>
            ) : (
              <AssetsTable startIndex={startIndex} endIndex={endIndex} setItemsPerPage={setItemsPerPage}/>
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
