import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WatchlistItem } from '@/lib/types';

interface WatchlistStore {
  items: WatchlistItem[];
  addToWatchlist: (symbol: string, name: string) => void;
  removeFromWatchlist: (symbol: string) => void;
  isInWatchlist: (symbol: string) => boolean;
  clearWatchlist: () => void;
}

export const useWatchlistStore = create<WatchlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addToWatchlist: (symbol: string, name: string) => {
        const { items } = get();
        if (!items.find(item => item.symbol === symbol)) {
          set({
            items: [...items, {
              symbol,
              name,
              addedAt: new Date().toISOString()
            }]
          });
        }
      },
      
      removeFromWatchlist: (symbol: string) => {
        set(state => ({
          items: state.items.filter(item => item.symbol !== symbol)
        }));
      },
      
      isInWatchlist: (symbol: string) => {
        return get().items.some(item => item.symbol === symbol);
      },
      
      clearWatchlist: () => {
        set({ items: [] });
      }
    }),
    {
      name: 'watchlist-storage'
    }
  )
);
