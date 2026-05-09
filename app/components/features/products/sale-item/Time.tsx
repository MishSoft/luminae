"use client"
import { useEffect, useState } from "react";

export default function Time({endDate}: {endDate?: string}) {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(endDate || 0).getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const h = Math.floor((difference / (1000 * 60 * 60)));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);


  return (
    <div className='flex flex-col py-4.25 px-7.5 items-center w-full'>
      <span className='font-extrabold text-[16px] leading-5 tracking-normal text-center flex items-center justify-center text-[#9D9D9D]'>Deal of the Day</span>
      <div className='flex items-center gap-2.5  text-[#C4C4C4]'>
        <span className='flex items-center text-[#262626] justify-center text-center font-extrabold text-[18px] leading-7.5 tracking-normal'>{timeLeft.hours}</span>
        :
        <span className='flex items-center text-[#262626] justify-center text-center font-extrabold text-[18px] leading-7.5 tracking-normal'>{timeLeft.minutes}</span>
        :
        <span className='flex items-center text-[#262626] justify-center text-center font-extrabold text-[18px] leading-7.5 tracking-normal'>{timeLeft.seconds}</span>
      </div>
      <div className='flex items-center gap-6.25'>
        <span className='flex items-center justify-center text-center font-normal text-[12px] leading-5 text-[#9D9D9D] tracking-normal'>hour</span>
        <span className='flex items-center justify-center text-center font-normal text-[12px] leading-5 text-[#9D9D9D] tracking-normal'>min</span>
        <span className='flex items-center justify-center text-center font-normal text-[12px] leading-5 text-[#9D9D9D] tracking-normal'>sec</span>
      </div>
    </div>
  )
}
