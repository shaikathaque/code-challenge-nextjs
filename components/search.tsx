import axios from 'axios'
import { useState } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import Airport from '../types/airport'

const Search: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [options, setOptions] = useState<Airport[]>([])
  const [selectedAirport, setSelectedAirport] = useState<Airport>()

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    
    try { 
      // make API call
      // set result in options
      const response = await axios.get('/api/searchAirports', {
        params: {
          searchQuery: query
        },
      });

      if (response.data) {
        setOptions(response.data)
      }
    } catch(error) {
      console.log(error)
      setIsLoading(false)
    }
    setIsLoading(false)
  };

  return (
    <>
      <AsyncTypeahead
        id="search-airports"
        isLoading={isLoading}
        labelKey={option => `${option.iata} ${option.name} ${option.city} ${option.country}`}
        minLength={2}
        onSearch={handleSearch}
        options={options}
        placeholder="Search for an airport..."
        renderMenuItemChildren={(option, props) => (
          <>
            <span>({option.iata}) {option.name}, {option.city}, {option.country}</span>
          </>
        )}
        useCache={false} // turn on in production
        onChange={(selected: Airport[]) => {
          setSelectedAirport(selected[0]);
        }}
      />
      {
        selectedAirport
        &&
        <a href={`/airports/${selectedAirport.iata.toLowerCase()}`} key={selectedAirport.iata} className='mt-5 flex items-center shadow p-5 border'>
          <div>
            {selectedAirport.name}, {selectedAirport.city}
          </div>
          <div className='ml-auto text-mono'>
            {selectedAirport.country}
          </div>
        </a>
      }
    </>
  )
}

export default Search

// Test cases
// case: component renders
// expect dropdowsn to render when search term is types
// expect no matches found to be displayed when no search results
