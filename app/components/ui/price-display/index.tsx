"use client"
import { useCurrencyStore } from '@/store/useCurrencyStore';

interface PriceProps {
  usdPrice: number;
  className?: string;
  discountPercentage?: number; 
}

export default function PriceDisplay({ usdPrice, className, discountPercentage }: PriceProps) {
  const { currentCurrency, exchangeRates } = useCurrencyStore();

  const finalUsdPrice = discountPercentage
    ? usdPrice * (1 - discountPercentage / 100)
    : usdPrice;

  const convertedPrice = finalUsdPrice * (exchangeRates[currentCurrency] || 1);

  const formatPrice = (price: number, currency: string) => {
    const formatted = price.toFixed(2);
    switch (currency) {
      case 'GEL': return `${formatted} ₾`;
      case 'EUR': return `${formatted} €`;
      case 'USD': return `$${formatted}`;
      default: return `${formatted} ${currency}`;
    }
  };

  return (
    <span className={`font-medium ${className}`}>
      {formatPrice(convertedPrice, currentCurrency)}
    </span>
  );
}
