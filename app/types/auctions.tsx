
export interface auctionTypes {
    _id: string,
    name:string,
    image: string,
    location: string,
    street: string,
    logo: string,
    space: number,
    startDate: string,
    endDate: string,
    assetsCount: number,
}
export interface AssetsCardsProps{
  startIndex:number
  endIndex:number
}