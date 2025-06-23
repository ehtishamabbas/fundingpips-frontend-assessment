export const API_ENDPOINTS = {
  SEARCH: '/api/stocks/search',
  QUOTE: '/api/stocks/quote',
  HISTORICAL: '/api/stocks/historical',
} as const;

export const POLLING_INTERVALS = {
  REALTIME: 15000, // 15 seconds
  WATCHLIST: 30000, // 30 seconds
  BACKGROUND: 60000, // 1 minute
} as const;

export const CHART_COLORS = {
  POSITIVE: '#10b981',
  NEGATIVE: '#ef4444',
  NEUTRAL: '#6b7280',
  PRIMARY: '#2563eb',
} as const;
