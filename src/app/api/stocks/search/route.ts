import { NextRequest, NextResponse } from 'next/server';

// Mock data for demo purposes
const mockStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timezone: 'UTC-04', currency: 'USD', matchScore: '1.0000' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timezone: 'UTC-04', currency: 'USD', matchScore: '0.9000' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timezone: 'UTC-04', currency: 'USD', matchScore: '0.8000' },
  { symbol: 'TSLA', name: 'Tesla Inc.', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timezone: 'UTC-04', currency: 'USD', matchScore: '0.7000' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', type: 'Equity', region: 'United States', marketOpen: '09:30', marketClose: '16:00', timezone: 'UTC-04', currency: 'USD', matchScore: '0.6000' },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json(
      { error: 'Query parameter is required' },
      { status: 400 }
    );
  }

  try {
    // Filter mock data based on query
    const results = mockStocks.filter(stock => 
      stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
      stock.name.toLowerCase().includes(query.toLowerCase())
    );

    return NextResponse.json({
      data: results,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Failed to search stocks' },
      { status: 500 }
    );
  }
}
