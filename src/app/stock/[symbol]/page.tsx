import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { StockDetails } from '@/components/StockDetails';

interface StockPageProps {
  params: {
    symbol: string;
  };
}

export async function generateMetadata({ params }: StockPageProps) {
  const { symbol } = await params;
  return {
    title: `${symbol.toUpperCase()} Stock - FundingPips Tracker`,
    description: `View real-time price, charts, and analysis for ${symbol.toUpperCase()} stock.`,
  };
}

export default async function StockPage({ params }: StockPageProps) {
  const { symbol } = await params;
  if (!symbol) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Suspense fallback={<StockDetailsSkeleton />}>
        <StockDetails symbol={symbol.toUpperCase()} />
      </Suspense>
    </div>
  );
}

function StockDetailsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-8 bg-gray-200 rounded-md animate-pulse w-48" />
      <div className="h-64 bg-gray-200 rounded-lg animate-pulse" />
      <div className="h-96 bg-gray-200 rounded-lg animate-pulse" />
    </div>
  );
}
