import axios from './api-config/apiConfiguration'

const services = {
  // Fetch all characters
  getAllCharacters: async ({ limit, offset, page, dataGridConfig }) => {
    // Optional parameters
    const { search, sort, races, gender } = dataGridConfig
    const queryParams = {
      page,
      limit,
      offset
    }

    if (search) {
      queryParams.name = search
    }

    if (gender !== undefined) {
      queryParams.gender = gender
    }

    if (sort) {
      queryParams.sort = 'name:'.concat(sort)
    }

    if (races.length > 0) {
      queryParams.race = races.join(',')
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
