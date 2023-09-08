import axios from './api-config/apiConfiguration'

const services = {
  // Fetch all characters
  getAllCharacters: async ({ limit = 10, offset, page, search, gender, races }) => {
    // Optional parameters
    const queryParams = {
      page,
      limit,
      offset
    }
    if (search !== undefined) {
      queryParams.search = search
    }

    if (gender !== undefined) {
      queryParams.gender = gender
    }

    if (races !== undefined) {
      queryParams.races = races
    }
    return await axios.get('/character', {
      params: queryParams
    })
  },

  //   Fetch a character details by Id
  getCharacterDetailsById: async (characterId) => {
    return await axios.get('/character', {
      params: {
        _id: characterId
      }
    })
  }
}

export default services
