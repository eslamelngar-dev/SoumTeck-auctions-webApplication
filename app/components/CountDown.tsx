"use client";
import { useEffect, useState } from "react";

interface CountdownProps {
  startDate: string;
  endDate: string;
  setClosed:(value:boolean) => void
}

export default function Countdown({ endDate, startDate,setClosed }: CountdownProps) {
  const upcoming = new Date().getTime() < new Date(startDate).getTime();
  const upcomingDate = new Date(startDate);
  let hours = upcomingDate.getHours();
  hours = hours % 12 || 12;
  const minutes = upcomingDate.getMinutes();

  const calculateTimeLeft = () => {
    const difference = new Date(endDate).getTime() - new Date().getTime();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(!timeLeft) {
      setClosed(true)
    }
  },[timeLeft,setClosed])

  if (!timeLeft) {
    return <div className="text-white bg-[#DC5224] h-[2.8rem] w-full flex items-center justify-center text-[0.7rem]"><p>تم اغلاق المزاد</p></div>;
  } else if (upcoming) {
    return (
      <div className="flex justify-around border border-gray-200 text-[#171D5B] w-full rounded-lg text-[0.68rem] text-center">
        <div className="flex-col justify-center items-center">
          <p>تاريخ فتح المزاد</p>
          <p className="font-bold">{`
          ${upcomingDate.getFullYear()} / ${upcomingDate.getMonth() + 1} / ${upcomingDate.getDate()}
        `}</p>
        </div>
        <div className="flex-col justify-center items-center">
          <p>وقت فتح المزاد</p>
          <p className="font-bold">{`
            ${hours}:${minutes.toString().padStart(2, "0")}
          `}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 text-sm  text-[#171D5B] rounded-xl px-7  border-2 border-[#EAEAEA]">
      <div>
        <div className="font-semibold text-2xl">{timeLeft.seconds}</div>
        <span className="text-[0.7rem] font-light ">ثانية</span>
      </div>
      <span className="text-xl">:</span>
      <div>
        <div className="font-semibold text-2xl">{timeLeft.minutes}</div>
        <span className="text-[0.7rem] font-light">دقيقة</span>
      </div>
      <span className="text-xl">:</span>
      <div>
        <div className="font-semibold text-2xl">{timeLeft.hours}</div>
        <span className="text-[0.7rem] font-light">ساعة</span>
      </div>
      <span className="text-xl">:</span>
      <div>
        <div className="font-semibold text-2xl">{timeLeft.days}</div>
        <span className="text-[0.7rem] font-light">يوم</span>
      </div>
    </div>
  );
}
