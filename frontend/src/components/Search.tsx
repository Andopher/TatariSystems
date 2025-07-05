import React, { useState, useRef, useEffect } from 'react'
import { Search as SearchIcon, X, ArrowUp, ArrowDown } from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  category: string
}

interface SearchProps {
  isOpen: boolean
  onClose: () => void
}

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Mock search results - in a real app, this would be an API call
  const mockSearch = async (searchQuery: string): Promise<SearchResult[]> => {
    const mockData: SearchResult[] = [
      {
        id: '1',
        title: 'AI Infrastructure',
        description: 'Sustainable AI training and inference infrastructure',
        url: '/projects',
        category: 'Services'
      },
      {
        id: '2',
        title: 'Cloud Solutions',
        description: 'Scalable cloud computing solutions with renewable energy',
        url: '/services',
        category: 'Services'
      },
      {
        id: '3',
        title: 'Cryptocurrency Mining',
        description: '100% renewable energy-powered mining operations',
        url: '/projects',
        category: 'Projects'
      },
      {
        id: '4',
        title: 'About Tatari Systems',
        description: 'Learn about our mission and sustainable computing approach',
        url: '/about',
        category: 'Company'
      },
      {
        id: '5',
        title: 'Contact Us',
        description: 'Get in touch with our team for infrastructure solutions',
        url: '/contact',
        category: 'Company'
      }
    ]

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    if (!searchQuery.trim()) return []
    
    return mockData.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleSearch = async () => {
      if (!query.trim()) {
        setResults([])
        return
      }

      setIsLoading(true)
      const searchResults = await mockSearch(query)
      setResults(searchResults)
      setIsLoading(false)
      setSelectedIndex(-1)
    }

    const debounceTimer = setTimeout(handleSearch, 300)
    return () => clearTimeout(debounceTimer)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : prev
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
          break
        case 'Enter':
          e.preventDefault()
          if (selectedIndex >= 0 && results[selectedIndex]) {
            window.location.href = results[selectedIndex].url
            onClose()
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, onClose])

  const handleResultClick = (result: SearchResult) => {
    window.location.href = result.url
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for services, projects, or information..."
              className="w-full pl-10 pr-12 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              aria-label="Search"
            />
            <button
              onClick={onClose}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-secondary-100 rounded"
              aria-label="Close search"
            >
              <X className="h-5 w-5 text-secondary-400" />
            </button>
          </div>
        </div>

        <div ref={resultsRef} className="max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-8 text-center text-secondary-600">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
              Searching...
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-secondary-200">
              {results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className={`w-full p-4 text-left hover:bg-secondary-50 transition-colors ${
                    index === selectedIndex ? 'bg-primary-50 border-l-4 border-primary-500' : ''
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-secondary-900">
                          {result.title}
                        </h3>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-secondary-600 text-sm">
                        {result.description}
                      </p>
                    </div>
                    {index === selectedIndex && (
                      <ArrowUp className="h-4 w-4 text-primary-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="p-8 text-center text-secondary-600">
              <SearchIcon className="h-12 w-12 mx-auto mb-4 text-secondary-400" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-2">Try different keywords or browse our services</p>
            </div>
          ) : (
            <div className="p-8 text-center text-secondary-600">
              <SearchIcon className="h-12 w-12 mx-auto mb-4 text-secondary-400" />
              <p>Start typing to search</p>
              <p className="text-sm mt-2">Search for services, projects, or company information</p>
            </div>
          )}
        </div>

        <div className="p-4 border-t bg-secondary-50">
          <div className="flex items-center justify-between text-xs text-secondary-500">
            <span>Use ↑↓ to navigate, Enter to select, Esc to close</span>
            <span>{results.length} results</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search 