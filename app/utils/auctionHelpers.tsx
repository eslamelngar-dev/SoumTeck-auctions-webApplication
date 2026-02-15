import { auctionTypes } from "../types/auctions";

interface DatesProps {
  startDate: string;
  endDate: string;
}

export type AuctionStatus = "upcoming" | "active" | "ended";

export const getAuctionStatus = ({
  startDate,
  endDate,
}: DatesProps): AuctionStatus => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) {
    return "upcoming";
  } else if (now >= start && now <= end) {
    return "active";
  } else {
    return "ended";
  }
};

interface FilterProps {
  auctions: auctionTypes[]; 
  status: AuctionStatus;
}

export const filterAuctions = ({
  auctions,
  status,
}: FilterProps): auctionTypes[] => {
  return auctions.filter((auction) => {
    const auctionStatus = getAuctionStatus({
      startDate: auction.startDate,
      endDate: auction.endDate,
    });
    return auctionStatus === status;
  });
};
