import { render, screen, fireEvent } from '@testing-library/react'
import { WatchlistButton } from '@/components/WatchlistButton'
import { useWatchlistStore } from '@/store/watchlistStore'

jest.mock('@/store/watchlistStore')

const mockUseWatchlistStore = useWatchlistStore as jest.MockedFunction<typeof useWatchlistStore>

describe('WatchlistButton', () => {
  const mockStore = {
    isInWatchlist: jest.fn(),
    addToWatchlist: jest.fn(),
    removeFromWatchlist: jest.fn(),
    items: [],
    clearWatchlist: jest.fn()
  }

  beforeEach(() => {
    mockUseWatchlistStore.mockReturnValue(mockStore)
    jest.clearAllMocks()
  })

  it('shows "Watch" when stock is not in watchlist', () => {
    mockStore.isInWatchlist.mockReturnValue(false)
    
    render(<WatchlistButton symbol="AAPL" name="Apple Inc." />)
    
    expect(screen.getByText('Watch')).toBeInTheDocument()
  })

  it('shows "Remove" when stock is in watchlist', () => {
    mockStore.isInWatchlist.mockReturnValue(true)
    
    render(<WatchlistButton symbol="AAPL" name="Apple Inc." />)
    
    expect(screen.getByText('Remove')).toBeInTheDocument()
  })
})
