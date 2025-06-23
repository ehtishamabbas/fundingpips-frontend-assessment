export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume?: number;
  marketCap?: string;
  peRatio?: number;
  week52High?: number;
  week52Low?: number;
  lastUpdated: string;
}

export interface SearchResult {
  symbol: string;
  name: string;
  type: string;
  region: string;
  marketOpen: string;
  marketClose: string;
  timezone: string;
  currency: string;
  matchScore: string;
}

export interface HistoricalDataPoint {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
  timestamp: string;
}

export interface WatchlistItem {
  symbol: string;
  name: string;
  addedAt: string;
}
