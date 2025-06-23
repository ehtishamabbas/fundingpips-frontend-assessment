'use client';

import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { StockCard } from '@/components/StockCard';
import { StockChart } from '@/components/StockChart';
import { useStockData } from '@/hooks/useStockData';
import { useRealTimePrice } from '@/hooks/useRealTimePrice';

export function StockTracker() {
  const [selectedStock, setSelectedStock] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>('');
  
  const { data: stockData, loading, error } = useStockData(selectedStock);
  const { data: realtimeData } = useRealTimePrice(selectedStock || '', 30000);

  const displayData = realtimeData || stockData;

  const handleStockSelect = (symbol: string, name: string) => {
    setSelectedStock(symbol);
    setSelectedName(name);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <SearchBar onStockSelect={handleStockSelect} />
      </div>

      {loading && (
        <div className="flex justify-center">
          <div className="text-gray-600">Loading stock data...</div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">Error: {error}</p>
        </div>
      )}

      {displayData && (
        <div className="space-y-6">
          <StockCard stock={displayData} />
          <StockChart symbol={displayData.symbol} />
        </div>
      )}

      {!selectedStock && !loading && (
        <div className="text-center text-gray-500 py-12">
          <p>Search for a stock symbol to get started</p>
          <p className="text-sm mt-2">Try searching for AAPL, GOOGL, MSFT, or any stock symbol</p>
        </div>
      )}
    </div>
  );
}
