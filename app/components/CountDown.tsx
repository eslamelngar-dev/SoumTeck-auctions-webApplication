"use client";
import { useEffect, useState } from "react";

interface CountdownProps {
  startDate: string;
  endDate: string;
  setClosed: (value: boolean) => void;
}

export default function Countdown({
  endDate,
  startDate,
  setClosed,
}: CountdownProps) {
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
    if (!timeLeft) {
      setClosed(true);
    }
  }, [timeLeft, setClosed]);

  if (!timeLeft) {
    return (
      <div className="text-white bg-[#DC5224] h-11 md:h-12 w-full flex items-center justify-center text-sm md:text-base font-semibold rounded-lg">
        <p>تم اغلاق المزاد</p>
      </div>
    );
  }

  if (upcoming) {
    return (
      <div className="flex flex-row justify-around items-center gap-4 border border-gray-200 text-[#171D5B] w-full rounded-lg text-center p-3 md:p-4">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[0.7rem] md:text-sm text-gray-500">
            تاريخ فتح المزاد
          </p>
          <p className="font-bold text-sm md:text-base">
            {`${upcomingDate.getFullYear()} / ${
              upcomingDate.getMonth() + 1
            } / ${upcomingDate.getDate()}`}
          </p>
        </div>

        <div className="w-px h-10 bg-gray-200"></div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-[0.7rem] md:text-sm text-gray-500">
            وقت فتح المزاد
          </p>
          <p className="font-bold text-sm md:text-base">
            {`${hours}:${minutes.toString().padStart(2, "0")}`}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row-reverse items-center justify-between w-full text-[#171D5B] rounded-xl px-4 md:px-6 py-2 md:py-3 border-2 border-[#EAEAEA] gap-2">
      <div className="flex flex-col items-center">
        <div className="font-bold text-xl md:text-2xl">{timeLeft.days}</div>
        <span className="text-[0.65rem] md:text-xs text-gray-500">يوم</span>
      </div>

      <span className="text-lg md:text-xl text-gray-300 font-bold items-center">:</span>

      <div className="flex flex-col items-center">
        <div className="font-bold text-xl md:text-2xl">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>  
        <span className="text-[0.65rem] md:text-xs text-gray-500">ساعة</span>
      </div>

      <span className="text-lg md:text-xl text-gray-300 font-bold">:</span>

      <div className="flex flex-col items-center">
        <div className="font-bold text-xl md:text-2xl">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <span className="text-[0.65rem] md:text-xs text-gray-500">دقيقة</span>
      </div>

      <span className="text-lg md:text-xl text-gray-300 font-bold">:</span>

      <div className="flex flex-col items-center">
        <div className="font-bold text-xl md:text-2xl">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <span className="text-[0.65rem] md:text-xs text-gray-500">ثانية</span>
      </div>
    </div>
  );
}
