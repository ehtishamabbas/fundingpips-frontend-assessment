'use client';

import { useWatchlistStore } from '@/store/watchlistStore';
import { useStockData } from '@/hooks/useStockData';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PriceDisplay } from '@/components/PriceDisplay';
import { Trash2, TrendingUp } from 'lucide-react';
import Link from 'next/link';

function WatchlistItem({ symbol, name }: { symbol: string; name: string }) {
  const { data, loading } = useStockData(symbol);
  const { removeFromWatchlist } = useWatchlistStore();

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <Link 
              href={`/stock/${symbol}`}
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              {symbol}
            </Link>
            <p className="text-sm text-gray-500 truncate">{name}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => removeFromWatchlist(symbol)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        
        {loading ? (
          <div className="text-sm text-gray-500">Loading...</div>
        ) : data ? (
          <PriceDisplay 
            price={data.price}
            change={data.change}
            changePercent={data.changePercent}
            size="sm"
          />
        ) : (
          <div className="text-sm text-red-500">Error loading price</div>
        )}
      </CardContent>
    </Card>
  );
}

export function Watchlist() {
  const { items, clearWatchlist } = useWatchlistStore();

  if (items.length === 0) {
    return (
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">Your Watchlist</h2>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Your watchlist is empty</p>
            <p className="text-sm text-gray-400 mt-1">
              Search for stocks and add them to your watchlist to track them here
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Your Watchlist ({items.length})</h2>
        {items.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearWatchlist}
            className="text-red-600 hover:text-red-700"
          >
            Clear All
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <WatchlistItem
            key={item.symbol}
            symbol={item.symbol}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}
