'use client';

import { Stock } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { WatchlistButton } from '@/components/WatchlistButton';
import { PriceDisplay } from '@/components/PriceDisplay';
import { Volume, Calendar } from 'lucide-react';

interface StockCardProps {
  stock: Stock;
  showChart?: boolean;
}

export function StockCard({ stock, showChart = true }: StockCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">{stock.symbol}</h3>
          <p className="text-sm text-gray-500">{stock.name}</p>
        </div>
        <WatchlistButton symbol={stock.symbol} name={stock.name} />
      </CardHeader>
      
      <CardContent className="space-y-4">
        <PriceDisplay
          price={stock.price}
          change={stock.change}
          changePercent={stock.changePercent}
        />
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          {stock.volume && (
            <div className="flex items-center space-x-2">
              <Volume className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">Volume: {stock.volume.toLocaleString()}</span>
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">Updated: {stock.lastUpdated}</span>
          </div>
          
          {stock.week52High && (
            <div className="text-gray-600">
              52W High: ${stock.week52High.toFixed(2)}
            </div>
          )}
          
          {stock.week52Low && (
            <div className="text-gray-600">
              52W Low: ${stock.week52Low.toFixed(2)}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
