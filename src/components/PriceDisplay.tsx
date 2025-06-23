import { TrendingUp, TrendingDown } from 'lucide-react';
import { clsx } from 'clsx';

interface PriceDisplayProps {
  price: number;
  change: number;
  changePercent: number;
  size?: 'sm' | 'md' | 'lg';
}

export function PriceDisplay({ price, change, changePercent, size = 'md' }: PriceDisplayProps) {
  const isPositive = change >= 0;
  
  return (
    <div className="flex items-baseline space-x-2">
      <span className={clsx(
        'font-bold',
        size === 'sm' && 'text-lg',
        size === 'md' && 'text-2xl',
        size === 'lg' && 'text-3xl'
      )}>
        ${price.toFixed(2)}
      </span>
      
      <div className={clsx(
        'flex items-center space-x-1',
        isPositive ? 'text-green-600' : 'text-red-600'
      )}>
        {isPositive ? (
          <TrendingUp className="h-4 w-4" />
        ) : (
          <TrendingDown className="h-4 w-4" />
        )}
        <span className="text-sm font-medium">
          {isPositive ? '+' : ''}${change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
        </span>
      </div>
    </div>
  );
}
