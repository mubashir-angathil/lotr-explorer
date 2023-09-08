import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT
})

// intercept request and attach access token
instance.interceptors.request.use(
  (config) => {
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },

  // throw error
  async (error) => {
    return await Promise.reject(error)
  }
)
export default instance
