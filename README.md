# FundingPips Stock Tracker

A modern, real-time stock tracking application built with Next.js 15, React 19, and TypeScript.

## 🚀 Features

- 🔍 **Stock Search**: Search stocks by name or ticker symbol
- 📈 **Real-time Updates**: Live price updates with configurable polling intervals
- 📊 **Historical Charts**: Interactive price trend visualization
- ⭐ **Personal Watchlist**: Add/remove stocks to track favorites
- 📱 **Mobile Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Server-side rendering with efficient caching

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Charts**: Recharts
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone and install dependencies:**
```bash
cd fundingpips-stock-tracker
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🐳 Docker

Build and run with Docker:

```bash
docker build -t stock-tracker .
docker run -p 3000:3000 stock-tracker
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── stock/          # Stock detail pages
│   └── globals.css     # Global styles
├── components/          # Reusable UI components
│   └── ui/             # Base UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and types
├── store/               # Zustand state management
└── __tests__/           # Test files
```

## 🔌 API Endpoints

- `GET /api/stocks/search?q={query}` - Search stocks
- `GET /api/stocks/quote?symbol={symbol}` - Get stock quote
- `GET /api/stocks/historical?symbol={symbol}` - Get historical data

## 🧪 Testing

Run tests:
```bash
npm test
```

The test suite includes:
- Unit tests for components
- Integration tests for user workflows
- Mock API responses for consistent testing

## ⚡ Performance Features

- **Server Components**: Leverages React Server Components for better performance
- **Real-time Updates**: Configurable polling intervals for live data
- **Code Splitting**: Automatic code splitting via Next.js
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🎯 Key Features Demo

1. **Search Functionality**: Type any stock symbol (AAPL, GOOGL, MSFT, etc.)
2. **Watchlist Management**: Click the star button to add/remove from watchlist
3. **Real-time Updates**: Prices update automatically every 30 seconds
4. **Historical Charts**: View 30-day price trends with interactive charts
5. **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## 🔧 Technical Highlights

- **RSC Architecture**: Strategic use of Server and Client Components
- **Type Safety**: Full TypeScript coverage with proper interfaces
- **State Management**: Zustand with persistence for watchlist
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Performance**: Debounced search, optimized re-renders, efficient caching
