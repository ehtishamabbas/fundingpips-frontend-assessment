'use client';

import { Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useWatchlistStore } from '@/store/watchlistStore';

interface WatchlistButtonProps {
  symbol: string;
  name: string;
}

export function WatchlistButton({ symbol, name }: WatchlistButtonProps) {
  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlistStore();
  const inWatchlist = isInWatchlist(symbol);

  const handleToggle = () => {
    if (inWatchlist) {
      removeFromWatchlist(symbol);
    } else {
      addToWatchlist(symbol, name);
    }
  };

  return (
    <Button
      variant={inWatchlist ? 'primary' : 'outline'}
      size="sm"
      onClick={handleToggle}
      className="flex items-center space-x-1"
    >
      <Star className={`h-4 w-4 ${inWatchlist ? 'fill-current' : ''}`} />
      <span>{inWatchlist ? 'Remove' : 'Watch'}</span>
    </Button>
  );
}
