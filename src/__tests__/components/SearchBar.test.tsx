import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SearchBar } from '@/components/SearchBar'

global.fetch = jest.fn()

const mockFetch = fetch as jest.MockedFunction<typeof fetch>

describe('SearchBar', () => {
  const mockOnStockSelect = jest.fn()

  beforeEach(() => {
    mockFetch.mockClear()
    mockOnStockSelect.mockClear()
  })

  it('renders search input', () => {
    render(<SearchBar onStockSelect={mockOnStockSelect} />)
    
    expect(screen.getByPlaceholderText(/search stocks/i)).toBeInTheDocument()
  })

  it('calls API when typing', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        data: [
          {
            symbol: 'AAPL',
            name: 'Apple Inc.',
            type: 'Equity',
            region: 'United States'
          }
        ]
      })
    } as Response)

    render(<SearchBar onStockSelect={mockOnStockSelect} />)
    
    const input = screen.getByPlaceholderText(/search stocks/i)
    fireEvent.change(input, { target: { value: 'AAPL' } })

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('/api/stocks/search?q=AAPL')
      )
    })
  })
})
