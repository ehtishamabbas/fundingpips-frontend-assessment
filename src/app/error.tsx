'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Something went wrong!</h2>
      <p className="text-gray-600 text-center max-w-md">
        We encountered an error while loading the stock data. Please try again.
      </p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
