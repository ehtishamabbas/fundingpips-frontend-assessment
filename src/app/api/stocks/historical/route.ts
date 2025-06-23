import { NextRequest, NextResponse } from 'next/server';

function generateHistoricalData(symbol: string) {
  const data = [];
  const basePrice = Math.random() * 200 + 50;
  let currentPrice = basePrice;

  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    const change = (Math.random() - 0.5) * 10;
    currentPrice = Math.max(10, currentPrice + change);
    
    data.push({
      date: date.toISOString().split('T')[0],
      open: parseFloat((currentPrice - Math.random() * 2).toFixed(2)),
      high: parseFloat((currentPrice + Math.random() * 3).toFixed(2)),
      low: parseFloat((currentPrice - Math.random() * 3).toFixed(2)),
      close: parseFloat(currentPrice.toFixed(2)),
      volume: Math.floor(Math.random() * 10000000) + 1000000
    });
  }
  
  return data;
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
    const data = generateHistoricalData(symbol);
    
    return NextResponse.json({
      data,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Historical data API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch historical data' },
      { status: 500 }
    );
  }
}
