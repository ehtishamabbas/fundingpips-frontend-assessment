import { Suspense } from 'react';
import { StockTracker } from '@/components/StockTracker';
import { Watchlist } from '@/components/Watchlist';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Track Your Favorite Stocks
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Search for stocks, view real-time prices, analyze trends, and manage your personal watchlist.
        </p>
      </div>
      
      <Suspense fallback={<StockTrackerSkeleton />}>
        <StockTracker />
      </Suspense>
      
      <Suspense fallback={<WatchlistSkeleton />}>
        <Watchlist />
      </Suspense>
    </div>
  );
}

function StockTrackerSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-10 bg-gray-200 rounded-md animate-pulse" />
      <div className="h-64 bg-gray-200 rounded-lg animate-pulse" />
    </div>
  );
}

function WatchlistSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-6 bg-gray-200 rounded-md animate-pulse w-32" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-32 bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
    </div>
  );
}
