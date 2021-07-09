import airports from '../data/airports.json'
import Airport from '../types/airport'

export const findAirportByIata = async (iata: string): Promise<Airport | undefined> => {
  return airports.find(airport => airport.iata === iata.toUpperCase())
}

export const allAirports = async (): Promise<Airport[]> => {
  return airports
}

// O(N): iterates data set once
// O(1): no additional data structures used
export const searchAirports = async (searchQuery: string): Promise<Airport[]> => {
  // iterate through all airports
  const formattedQuery = searchQuery.toLowerCase();

  return airports.filter((airport) => {
    // iata
    if (airport.iata.toLowerCase().startsWith(formattedQuery)) {
      return true
    }

    // name
    if (airport.name.toLowerCase().startsWith(formattedQuery)) {
      return true
    }

    // city
    if (airport.city.toLowerCase().startsWith(formattedQuery)) {
      return true
    }

    // country
    if (airport.country.toLowerCase().startsWith(formattedQuery)) {
      return true
    }
  })
}
// possible improvements:
// elastisearch - for better search results
// store separate datasets sorted by country, city, name, iata
// have multiple searches run in parallel to complete search in LogN time



// Tests
// searchAirport returns empty list when no results found
