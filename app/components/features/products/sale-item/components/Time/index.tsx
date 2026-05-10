"use client"
import { useEffect, useState } from "react";

export default function Time({endDate}: {endDate?: string}) {
  const [timeLeft, setTimeLeft] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    if (!endDate) return;

    const timer = setInterval(() => {
      const end = new Date(endDate).getTime();
      const now = new Date().getTime();
      const distance = end - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className='flex flex-col items-center gap-2 mb-4'>
      <span className='text-text-muted font-extrabold text-[16px] leading-5'>Deal of the Day</span>
      <div className='flex items-start gap-4'>
        <div className='flex flex-col items-center gap-1'>
          <span className='text-text-main font-extrabold text-[18px] leading-7.5'>{timeLeft.hours}</span>
          <span className='text-icon-muted leading-5 text-[12px] font-normal uppercase tracking-wider'>hour</span>
        </div>
        <span className='text-icon-muted font-bold text-[24px] leading-5'>:</span>
        <div className='flex flex-col items-center gap-1'>
          <span className='text-text-main font-extrabold text-[18px] leading-7.5'>{timeLeft.minutes}</span>
          <span className='text-icon-muted leading-5 text-[12px] font-normal uppercase tracking-wider'>min</span>
        </div>
        <span className='text-icon-muted font-bold text-[24px] leading-5'>:</span>
        <div className='flex flex-col items-center gap-1'>
          <span className='text-text-main font-extrabold text-[18px] leading-7.5'>{timeLeft.seconds}</span>
          <span className='text-icon-muted leading-5 text-[12px] font-normal uppercase tracking-wider'>sec</span>
        </div>
      </div>
    </div>
  )
}
