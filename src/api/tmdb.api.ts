import axios from 'axios'
import Config from 'react-native-config'

export const tmdbApi = () => {
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
  })

  const key = Config.TMDB_KEY

  return {
    cast: async (filmId: string) => {
      return (await api.get(`/movie/${filmId}/credits?api_key=${key}`)).data.cast
    }
  }
}