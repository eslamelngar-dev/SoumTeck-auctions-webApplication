export interface auctionTypes {
  _id: string;
  name: string;
  image: string;
  location: string;
  street: string;
  logo: string;
  space: number;
  startDate: string;
  endDate: string;
  assetsCount: number;
}
export interface assetTypes {
  _id: string;
  name: string;
  image: string;
  location: string;
  deposit: number;
  bidPrice: number;
  space: number;
  startDate: string;
  endDate: string;
  bidsCount: number;
}
export interface AssetsProps {
  startIndex: number;
  endIndex: number;
  auctionId:string | undefined
}
