import axios from './api-config/apiConfiguration'

// Define a set of services for fetching character data
const services = {
  // Fetch all characters with optional filtering, sorting, and pagination parameters
  getAllCharacters: async ({ limit, offset, page, dataGridConfig }) => {
    // Extract optional parameters from dataGridConfig
    const { search, sort, races, gender } = dataGridConfig

    // Construct the query parameters for the API request
    const queryParams = {
      page,
      limit,
      offset
    }

    // Add optional search parameter if provided
    if (search) {
      queryParams.name = search
    }

    // Add optional gender filter if provided
    if (gender !== undefined) {
      queryParams.gender = gender
    }

    // Add optional sort parameter if provided
    if (sort) {
      queryParams.sort = 'name:'.concat(sort)
    }

    // Add optional races filter if races are selected
    if (races.length > 0) {
      queryParams.race = races.join(',')
    }

    // Make a GET request to fetch characters with the constructed query parameters
    return await axios.get('/character', {
      params: queryParams
    })
  },

  // Fetch character details by characterId
  getCharacterDetailsById: async (characterId) => {
    // Make a GET request to fetch character details by ID
    return await axios.get('/character', {
      params: {
        _id: characterId
      }
    })
  }
}

export default services
