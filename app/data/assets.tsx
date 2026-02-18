import { v4 as uuidv4 } from "uuid";

export const Assets = [
  {
    _id:uuidv4(),
    name:"عمارة جديدة",
    image:"/assets/1.jpg",
    location:"الرياض",
    startDate:"2026-01-01T08:00:00",
    endDate:"2026-02-28T23:59:59",
    bidPrice:500000000,
    bidsCount:12,
    space:325.22,
    deposit:2.500,
  },
]