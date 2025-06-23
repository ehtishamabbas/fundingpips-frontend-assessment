'use client';

import { useStockData } from '@/hooks/useStockData';
import { useRealTimePrice } from '@/hooks/useRealTimePrice';
import { StockCard } from '@/components/StockCard';
import { StockChart } from '@/components/StockChart';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

interface StockDetailsProps {
  symbol: string;
}

export function StockDetails({ symbol }: StockDetailsProps) {
  const { data: stockData, loading, error } = useStockData(symbol);
  const { data: realtimeData } = useRealTimePrice(symbol, 15000);

  const displayData = realtimeData || stockData;

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-gray-200 rounded-md animate-pulse w-48" />
        <div className="h-64 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    );
  }

  if (error || !displayData) {
    return (
      <div className="space-y-4">
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>
        </Link>
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">
            {error || `Unable to load data for ${symbol}`}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link href="/">
        <Button variant="outline" size="sm">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Search
        </Button>
      </Link>
      
      <StockCard stock={displayData} />
      <StockChart symbol={symbol} />
    </div>
  );
}
