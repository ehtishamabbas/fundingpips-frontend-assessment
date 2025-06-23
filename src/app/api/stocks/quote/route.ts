import { NextRequest, NextResponse } from 'next/server';

// Mock stock data generator
function generateMockQuote(symbol: string) {
  const basePrice = Math.random() * 200 + 50; // Random price between 50-250
  const change = (Math.random() - 0.5) * 10; // Random change between -5 to +5
  const changePercent = (change / basePrice) * 100;

  return {
    symbol: symbol.toUpperCase(),
    name: symbol.toUpperCase() + ' Corporation',
    price: parseFloat(basePrice.toFixed(2)),
    change: parseFloat(change.toFixed(2)),
    changePercent: parseFloat(changePercent.toFixed(2)),
    volume: Math.floor(Math.random() * 10000000) + 1000000,
    week52High: parseFloat((basePrice * 1.2).toFixed(2)),
    week52Low: parseFloat((basePrice * 0.8).toFixed(2)),
    lastUpdated: new Date().toISOString().split('T')[0]
  };
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const symbol = searchParams.get('symbol');

  if (!symbol) {
    return NextResponse.json(
      { error: 'Symbol parameter is required' },
      { status: 400 }
    );
  }

  try {
    // Generate mock data
    const quote = generateMockQuote(symbol);
    
    return NextResponse.json({
      data: quote,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stock quote' },
      { status: 500 }
    );
  }
}
