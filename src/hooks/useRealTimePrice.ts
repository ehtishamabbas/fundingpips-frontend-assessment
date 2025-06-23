import { useState, useEffect, useRef } from 'react';
import { Stock } from '@/lib/types';

export function useRealTimePrice(symbol: string, intervalMs = 30000) {
  const [data, setData] = useState<Stock | null>(null);
  const [loading, setLoading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!symbol) return;

    const fetchPrice = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/stocks/quote?symbol=${symbol}`);
        if (response.ok) {
          const result = await response.json();
          setData(result.data);
        }
      } catch (error) {
        console.error('Real-time price fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
    intervalRef.current = setInterval(fetchPrice, intervalMs);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [symbol, intervalMs]);

  return { data, loading };
}
